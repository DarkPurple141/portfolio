---
title: The Secure Copy Protocol (SCP)
stub: Transferring files and folders via the command line (SCP)
tags: explainers,linux
---
## Transferring files and folders via the command line (SCP)

If you're working remotely, or don't have access to your normal computer you may
currently use something like DropBox or Google Drive to access and update your files.
Both of these can be cumbersome. SCP (Or the secure copy) provides a simple command line based alternative. SCP's strength is its simplicity.

To transfer a file to someone your working with or to your own CSE account do something like this.

```bash
$ scp [theFile] z[theirstudentid]@cse.unsw.edu.au:

// example

$ scp myProgram.c z5555555@cse.unsw.edu.au:

```
You will be asked for their password, not yours. This authenticates you, to copy into their account.

## Copying a directory rather than a file

```bash
$ scp -r [theFolder] z[theirstudentid]@cse.unsw.edu.au:

// example

$ scp -r lab2 z5555555@cse.unsw.edu.au:

Again password will be asked.
```

## Copying a file/folder into a specific folder

```bash
$ scp -r [theFolder] z[theirstudentid]@cse.unsw.edu.au:[Some/Path]

// example

$ scp -r lab2 z5555555@cse.unsw.edu.au:COMP1511/labs/

// copies into COMP1511/labs on z5555555s computer.

```
