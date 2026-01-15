/* eslint-disable no-console */
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { storeResponse } from '../src/store.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Twilio sends form-urlencoded data
    const body = req.body

    // Extract the message body from Twilio's webhook payload
    const messageBody = body.Body || body.body
    const from = body.From || body.from

    if (!messageBody) {
      console.error('No message body in webhook payload:', body)
      return res.status(400).json({ error: 'No message body' })
    }

    console.log(`Received SMS from ${from}: ${messageBody}`)

    // Store the response
    const updated = await storeResponse(messageBody)

    if (updated) {
      console.log(`Stored response for request ${updated.id}`)
    } else {
      console.log('No pending request found to match response')
    }

    // Respond with TwiML (empty response - no auto-reply)
    res.setHeader('Content-Type', 'text/xml')
    return res
      .status(200)
      .send('<?xml version="1.0" encoding="UTF-8"?><Response></Response>')
  } catch (error) {
    console.error('Webhook error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
