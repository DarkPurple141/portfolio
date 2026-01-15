/* eslint-disable no-console */
import express from 'express'
import { storeResponse } from '../src/store.js'

const app = express()
const port = process.env.WEBHOOK_PORT || 3002

// Parse URL-encoded bodies (Twilio sends form-urlencoded data)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/', async (req, res) => {
  try {
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
})

app.listen(port, () => {
  console.log(`SMS webhook server listening on port ${port}`)
})

export default app
