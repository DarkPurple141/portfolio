---
title: Main(), argc and argv[]
stub: Understanding the different ways to express int main() in C.
tags: explainers,c
---
## Understanding the different ways to express int main() in C

One of the key sources of confusion first time programmers tackling C (or other languages like java etc) comes from the very scary looking way we express our main function ie.
```c
// legit what the?
int main (int argc, char * argv[]);
```
This is totally unintelligible for the novice programmer, particularly when you've not
done things like functions, arrays or even strings! Usually, teachers start by using the simpler
int main(void) to stave off uncomfortable questions. But even that's probably a little puzzling.

### Let's break it down
First up, you should think of main like any other function in C. *BTW: If you don't know what a function is, you should probably read [this](17_functions.html) first.*

If you think of it as a function, this whole "int argc", "char * argv[]" part simply becomes
the parameters of the function. But what do they represent?

Well, to end the mystery, they're the command line arguments. You know when you do something like this in linux.
```bash
$ mkdir myFolder
```
You're actually running a program called mkdir, which has a single argument "myFolder".
In a C program, we're likely to do something like this.
```bash
$ ./program
```
But it would be equally valid, **even useful**, to run our program like this.
```bash
$ ./program myDataFolder "myName"
```
Which would pass the arguments, myDataFolder and "myName" to our program. These
are accessible via argv. argv[0] is our program name, argv[1] corresponds to myDataFolder and argv[2] corresponds to "myName"... etc etc.

argc then is the number of arguments that we're passed. argc is literally
argument count.

You can test this (and I encourage you to do so) by writing a simple program yourself and printing out the values of argc and argv. They're really not all that mysterious.
