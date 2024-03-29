---
title: Abstraction
published: 2015-01-30T02:30:53.235Z
description:
  What is abstraction and how does it apply to programming? One of my original
  blogs about programming!
tags:
  - explainers
  - c
  - abstraction
---

Abstraction is the concept of properly targeting our thinking around the level
that makes most the contextual sense. It allows us to drill down and become more
specific when we need to, or break out into broader more general concepts.

You use it everyday, in such an intuitive way that you may not even be aware of
it. Let's say you're at the train station and you need to buy a train ticket.

You would simply ask:

> Can I have a ticket for the AB train please?.

But you could equally say:

> I need a piece of paper that holds ticketing information that I will be able
> to present to a ticket inspector which proves that I I am allowed to travel on
> the train from A to B and only on this train and on no other.

It's impractical and somewhat confusing to say the latter, but it's the latter
that is implied and understood by the former.

Sometimes of course it pays to be more specific. If we're talking about the
microbiology of the gut of a cow, it doesn't really matter that the cow's name
is Sally, does it?

## Abstraction in programming

In programming, abstraction allows us to break our software into different
levels of logic appropriate for the context of the software. For example, using
[functions](17_functions.html), we might be building a mail application.

At the top level we could have functions like `sendMail`, `retrieveMail`. This
is perhaps the level our user might interact with our software. It's
uncomplicated and clear.

At a lower level we might have some helper functions. For our `sendMail`
function for example, we might have `setUpConnection`, `encodeMessage`,
`addHeaders`, `sendData` etc. These all have could have further abstractions
still. And so on so forth.

## So what?

By breaking out our logic into these abstracted levels we make our code easier
to develop and manage. It also makes it easier for us to avoid costly refactors
or rewrites if we've made sensible abstractions that allow us to change or
evolve the internals of a system without affecting the external interface.

Again, considering the mail application, if we wanted to change the type of
server our application ran on we could do so without changing anything
user-facing.

Abstraction is a powerful tool for designing software. It's also a powerful tool
in our everyday lives.
