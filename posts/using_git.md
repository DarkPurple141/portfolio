---
title: Using Git
stub: Getting started with git, a version control system
tags: linux,git,explainers
---
**[This tutorial is comprehensive]**(https://www.atlassian.com/git/tutorials/what-is-version-control) - I suggest you use it, but if time poor, below will suffice.

## Installing Git
If you don't have git already (most systems will), you'll need to install it
on your system.

```bash
# linux
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install git

# mac
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew doctor
brew install git
```
And on Windows: go to [Git for Windows](http://msysgit.github.io/) and **install it**.

## Setting up a remote repository
While git does work as a standalone version control system (even for a single user),
its real power is in allowing multi-user collaboration. And for that you'll need a **remote repository**.

There are a number of options here, but some of the bigger ones are:

* [GitHub](https://www.github.com)
* [BitBucket](https://www.bitbucket.org)
* [GitLab](https://www.gitlab.com)

They're subtly different but fulfil the same purpose, hosting your repository.

Signing up with a **student email** will give you premium access and also allows **unlimited private** repositories. It's a no-brainer. Do it.

## Getting started
The best way to get started is to create a repository on github, gitlab or bitbucket and then 'clone' that repository locally.

Setup your global config:
```bash
git config --global user.email "your_email@example.com"

git config --global user.name "Your Name"
```
And then clone.. something like this:
```bash
git clone ssh://john@example.com/path/to/my-project.git
```

## Basic use
For beginner purposes the following commands will be likely, all you'll need.

```bash
# check the status of the local repo
git status

# add a file to be "staged"
git add [file]

# add all files to be "staged"
git add -A

# a message to go with the current commit
git commit -m "I've updated our gameMoves() funciton."

# push the changes to the repository on
# the master branch
git push origin master

# pull any changes from the remote repository not in the local repo
git fetch && git pull

# OR
git pull origin master
```
