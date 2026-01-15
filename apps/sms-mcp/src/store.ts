/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
import { Redis } from '@upstash/redis'

console.log('[sms-mcp:store] Initializing Redis client')
console.log('[sms-mcp:store] Redis URL configured:', !!process.env.UPSTASH_REDIS_REST_URL)
console.log('[sms-mcp:store] Redis token configured:', !!process.env.UPSTASH_REDIS_REST_TOKEN)

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

console.log('[sms-mcp:store] Redis client initialized')

export interface PendingRequest {
  id: string
  message: string
  sentAt: number
  response?: string
  respondedAt?: number
}

const PENDING_KEY = 'sms-mcp:pending'
const RESPONSE_KEY_PREFIX = 'sms-mcp:response:'
const DEDUP_KEY_PREFIX = 'sms-mcp:dedup:'
const DEDUP_TTL_SECONDS = 60 // Prevent duplicate sends within 60 seconds

// Store a pending SMS request
export async function storePendingRequest(
  request: PendingRequest,
): Promise<void> {
  console.log('[sms-mcp:store] storePendingRequest:', request.id)
  try {
    // Store as the current pending request (for webhook to find)
    await redis.set(PENDING_KEY, JSON.stringify(request))
    console.log('[sms-mcp:store] Stored pending request at:', PENDING_KEY)
    // Also store by ID for lookup
    await redis.set(
      `${RESPONSE_KEY_PREFIX}${request.id}`,
      JSON.stringify(request),
      {
        ex: 86400, // Expire after 24 hours
      },
    )
    console.log('[sms-mcp:store] Stored request by ID:', `${RESPONSE_KEY_PREFIX}${request.id}`)
  } catch (error) {
    console.error('[sms-mcp:store] Error storing pending request:', error)
    throw error
  }
}

// Get the current pending request
export async function getPendingRequest(): Promise<PendingRequest | null> {
  console.log('[sms-mcp:store] getPendingRequest')
  try {
    const data = await redis.get<string>(PENDING_KEY)
    console.log('[sms-mcp:store] getPendingRequest result:', !!data)
    if (!data) return null
    return typeof data === 'string' ? JSON.parse(data) : data
  } catch (error) {
    console.error('[sms-mcp:store] Error getting pending request:', error)
    throw error
  }
}

// Get a request by ID
export async function getRequestById(
  id: string,
): Promise<PendingRequest | null> {
  console.log('[sms-mcp:store] getRequestById:', id)
  try {
    const data = await redis.get<string>(`${RESPONSE_KEY_PREFIX}${id}`)
    console.log('[sms-mcp:store] getRequestById result:', !!data)
    if (!data) return null
    return typeof data === 'string' ? JSON.parse(data) : data
  } catch (error) {
    console.error('[sms-mcp:store] Error getting request by ID:', error)
    throw error
  }
}

// Store a response for the current pending request
export async function storeResponse(
  response: string,
): Promise<PendingRequest | null> {
  console.log('[sms-mcp:store] storeResponse called')
  try {
    const pending = await getPendingRequest()
    if (!pending) {
      console.log('[sms-mcp:store] No pending request found')
      return null
    }

    console.log('[sms-mcp:store] Found pending request:', pending.id)

    const updated: PendingRequest = {
      ...pending,
      response,
      respondedAt: Date.now(),
    }

    // Update both keys
    await redis.set(PENDING_KEY, JSON.stringify(updated))
    await redis.set(
      `${RESPONSE_KEY_PREFIX}${pending.id}`,
      JSON.stringify(updated),
      {
        ex: 86400,
      },
    )

    console.log('[sms-mcp:store] Response stored for request:', pending.id)
    return updated
  } catch (error) {
    console.error('[sms-mcp:store] Error storing response:', error)
    throw error
  }
}

// Check if a request has a response
export async function checkForResponse(id: string): Promise<string | null> {
  try {
    const request = await getRequestById(id)
    const hasResponse = !!request?.response
    // Only log occasionally to avoid spam during polling
    if (hasResponse) {
      console.log('[sms-mcp:store] checkForResponse:', id, '- found response')
    }
    return request?.response ?? null
  } catch (error) {
    console.error('[sms-mcp:store] Error checking for response:', error)
    throw error
  }
}

// Clear pending request after it's been handled
export async function clearPendingRequest(): Promise<void> {
  console.log('[sms-mcp:store] clearPendingRequest')
  try {
    await redis.del(PENDING_KEY)
    console.log('[sms-mcp:store] Pending request cleared')
  } catch (error) {
    console.error('[sms-mcp:store] Error clearing pending request:', error)
    throw error
  }
}

// Create a simple hash for deduplication
function createDedupKey(message: string, phone: string): string {
  // Simple hash based on message content and phone number
  const content = `${phone}:${message}`
  let hash = 0
  for (let i = 0; i < content.length; i++) {
    const char = content.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return `${DEDUP_KEY_PREFIX}${Math.abs(hash).toString(36)}`
}

// Check if a similar SMS was recently sent, returns existing request_id if so
export async function checkDuplicateSms(
  message: string,
  phone: string,
): Promise<string | null> {
  const dedupKey = createDedupKey(message, phone)
  console.log('[sms-mcp:store] checkDuplicateSms key:', dedupKey)
  try {
    const existingRequestId = await redis.get<string>(dedupKey)
    if (existingRequestId) {
      console.log(
        '[sms-mcp:store] Found duplicate SMS, existing request:',
        existingRequestId,
      )
      return existingRequestId
    }
    return null
  } catch (error) {
    console.error('[sms-mcp:store] Error checking duplicate SMS:', error)
    throw error
  }
}

// Mark an SMS as sent for deduplication
export async function markSmsSent(
  message: string,
  phone: string,
  requestId: string,
): Promise<void> {
  const dedupKey = createDedupKey(message, phone)
  console.log('[sms-mcp:store] markSmsSent key:', dedupKey, 'request:', requestId)
  try {
    await redis.set(dedupKey, requestId, { ex: DEDUP_TTL_SECONDS })
    console.log('[sms-mcp:store] SMS marked as sent with TTL:', DEDUP_TTL_SECONDS)
  } catch (error) {
    console.error('[sms-mcp:store] Error marking SMS as sent:', error)
    throw error
  }
}
