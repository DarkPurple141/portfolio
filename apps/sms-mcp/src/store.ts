/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

export interface PendingRequest {
  id: string
  message: string
  sentAt: number
  response?: string
  respondedAt?: number
}

const PENDING_KEY = 'sms-mcp:pending'
const RESPONSE_KEY_PREFIX = 'sms-mcp:response:'

// Store a pending SMS request
export async function storePendingRequest(
  request: PendingRequest,
): Promise<void> {
  // Store as the current pending request (for webhook to find)
  await redis.set(PENDING_KEY, JSON.stringify(request))
  // Also store by ID for lookup
  await redis.set(
    `${RESPONSE_KEY_PREFIX}${request.id}`,
    JSON.stringify(request),
    {
      ex: 86400, // Expire after 24 hours
    },
  )
}

// Get the current pending request
export async function getPendingRequest(): Promise<PendingRequest | null> {
  const data = await redis.get<string>(PENDING_KEY)
  if (!data) return null
  return typeof data === 'string' ? JSON.parse(data) : data
}

// Get a request by ID
export async function getRequestById(
  id: string,
): Promise<PendingRequest | null> {
  const data = await redis.get<string>(`${RESPONSE_KEY_PREFIX}${id}`)
  if (!data) return null
  return typeof data === 'string' ? JSON.parse(data) : data
}

// Store a response for the current pending request
export async function storeResponse(
  response: string,
): Promise<PendingRequest | null> {
  const pending = await getPendingRequest()
  if (!pending) return null

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

  return updated
}

// Check if a request has a response
export async function checkForResponse(id: string): Promise<string | null> {
  const request = await getRequestById(id)
  return request?.response ?? null
}

// Clear pending request after it's been handled
export async function clearPendingRequest(): Promise<void> {
  await redis.del(PENDING_KEY)
}
