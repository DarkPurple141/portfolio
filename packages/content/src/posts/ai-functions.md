---
title: What really changed my mind about AI - LLM functions
published: 2024-03-17T02:30:53.235Z
description:
  Large language models are wildly powerful, but their weakness is their
  inability to properly understand their own limitations. Functions are the key
  to unlocking their potential.
tags:
  - AI
---

I've been following the growth of LLMs (large language models) for a few years
now and the way their developing is nothing short of incredible. They're a huge
leap forward for computing and unlock one of the biggest previous constraints on
the power of computers: the ability to understand complex text, parse it and
provide meaningful responses.

You can go to [Chat GPT](https://chat.openai.com/) and have a conversation with
a computer that is so good at understanding and responding to text that it's
almost indistinguishable from a human.

What LLMs struggle with though is understanding their own limitations. They can
be overly confident in their responses and often provide incorrect or misleading
information, and this comes from their nature as
[stochastic](https://en.wikipedia.org/wiki/Stochastic) models. They have varied
responses to the same input, and given broad enough scope can be wrong in
bizarre and unexpected ways.

This partly a limitation of the technology, but it's also a limitation of the
way we use them. We often treat them as if they're omniscient, but they don't
always perceive the meaning of the text they're processing in the same way we
do, or occasionally we're not quite as good as we think we are at communicating
our own ideas.

A breakthrough in my appreciation for LLMs has been in the growing use of
functions. [Functions](https://platform.openai.com/docs/guides/function-calling)
are ways to scope the input and output of an LLM, and they're a way to help the
LLM understand the context of the text it's processing.

For example, when booking a flight you need real world data based on your
location, the time of year, the destination, and so on. You can't just ask an
LLM "book me a flight" and expect it to understand all the context you're
implying. But if you use a function to scope the input and output of the LLM,
you can provide it with the context it needs to understand the request and you
can handle that scope with specific code to call APIs, provide real data, or
being the process of booking.

> What's the cheapest flight from London to New York in July?

The function inputs might look like:

```typescript
{
  "origin": string,
  "destination": string,
  "date": Date
}

// parsed as
{
  "origin": "London",
  "destination": "New York",
  "date": "2024-07-01"
}
```

Which might call out to a flight booking API to get the cheapest flight. The API
outputs might look like:

```typescript
{
  "flight": {
    "origin": string,
    "destination": string,
    "date": Date,
    "price": number
  }
}

// returned as
{
  "flight": {
    "origin": "London",
    "destination": "New York",
    "date": "2024-07-01",
    "price": 300
  }
}
```

And the LLM can then understand the context of the request and provide a
meaningful response. eg.

> The cheapest flight from London to New York in July is £300.

The LLM could then go on to book the flight, or provide further information, or
whatever else you've scoped it to do. This sort of gated, safe and deterministic
application of LLMs is the key to unlocking their potential and making them a
safe and reliable part of our future.

It's very cool, and I'm excited to see where it goes.
