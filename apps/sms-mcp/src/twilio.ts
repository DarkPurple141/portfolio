/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Twilio from 'twilio'

const client = Twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!,
)

export interface SendSmsOptions {
  to: string
  message: string
}

export async function sendSms({
  to,
  message,
}: SendSmsOptions): Promise<string> {
  const result = await client.messages.create({
    body: message,
    to,
    from: process.env.TWILIO_PHONE_NUMBER!,
  })

  return result.sid
}
