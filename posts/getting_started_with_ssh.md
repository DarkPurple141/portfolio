---
title: SSH and SSH keys
stub: Setting up SSH keys to make your life easier
tags: explainers,linux
---
## What are ssh keys?!
Cool security keys that allow your computers to recognise eachother! (basically)
Usefully, ssh keys will allow you to remotely
login into cse (or any computer) without using your password.

Sounds great right!? It is. This is what you need to do.

> Tip: ssh stands for "secure shell"

## On your home machine

In terminal/putty/xTerm:
```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
Then press enter, enter, enter. IE don't enter a passphrase on prompt. You don't need one.

```bash
# Now
cd ~/.ssh/
# and then:
cat id_rsa.pub
```
Copy the output. In full. Now ssh into cse as you normally would.

```bash
ssh z555555555@cse.unsw.edu.au
```
Enter your normal password.

## On your cse machine

```bash
mkdir -p ~/.ssh/
# Then paste your key from your local machine like this:
echo "<paste in here>" >> ~/.ssh/authorized_keys
# make sure you surround your paste with double quotes.
```
And you're done!

## If you're feeling tricky
You could do the above using [scp](17_scp):
```bash
# Don't do this if you already have authorized_keys setup as it will be overwritten
scp ~/id_rsa.pub z5555555@cse.unsw.edu.au:.ssh/authorized_keys
```
