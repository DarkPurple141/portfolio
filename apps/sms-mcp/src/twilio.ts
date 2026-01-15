/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
import Twilio from 'twilio'

console.log('[sms-mcp:twilio] Initializing Twilio client')
console.log('[sms-mcp:twilio] Twilio SID configured:', !!process.env.TWILIO_ACCOUNT_SID)
console.log('[sms-mcp:twilio] Twilio token configured:', !!process.env.TWILIO_AUTH_TOKEN)
console.log('[sms-mcp:twilio] Twilio phone configured:', !!process.env.TWILIO_PHONE_NUMBER)

const client = Twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!,
)

console.log('[sms-mcp:twilio] Twilio client initialized')

export interface SendSmsOptions {
  to: string
  message: string
}

export async function sendSms({
  to,
  message,
}: SendSmsOptions): Promise<string> {
  console.log('[sms-mcp:twilio] sendSms called:', {
    to,
    messageLength: message.length,
    from: process.env.TWILIO_PHONE_NUMBER,
  })

  try {
    const result = await client.messages.create({
      body: message,
      to,
      from: process.env.TWILIO_PHONE_NUMBER!,
    })

    console.log('[sms-mcp:twilio] SMS sent successfully, SID:', result.sid)
    return result.sid
  } catch (error) {
    console.error('[sms-mcp:twilio] Error sending SMS:', error)
    throw error
  }
}
