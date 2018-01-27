---
title: Functions
stub: How functions work and why we use them
tags: explainers,c
---
## How functions work and why we use them

Functions are one of the key foundations of programming, and are incredibly powerful
when used correctly.

## What is a function?
A function has three key features:
* inputs (or arguments), ie what we're passing in
* outputs (or return values), ie what we're receiving
* inner-logic, ie what our function does between input and output

They can be as complex or as simple as we want them to be; we could have a function that
assesses whether a number is even (trivial), or one that initialises a web-application (highly complex). The important thing here is separating and breaking down our logic.

Separating out our logic into smaller blocks gives us a number of advantages:
* Our code is more readable
* We can tweak the logic of our functions without affecting our main program if we keep its inputs and outputs the same.
* We can reuse our blocks of code in many places easily
* We can abstract our program into different levels of logic

## Syntax
Functions in C have the following common syntax used to define them:
[return type] [function name] ([paramter1 type] paramater1...);

To be explicit, these are all valid function prototypes or declarations:
```c
// The following are function prototypes, that is they say "this function exists"
// However these are simply skeletons, we need to properly define them to make them valid.

// returns an int, is called 'isEven', takes in a number (int)
int isEven(int number);
// returns void//nothing, isCalled 'isEven', takes in a number (int)
void isEven(int number);
// returns void/nothing, isCalled 'printHello', takes in nothing
void printHello(void);
```
NB. When you use a function, you must use it with the parameters required. isEven needs
a number, printHello doesn't need anything etc.

## Basic use cases
Let's consider our trivial isEven function from above. It might look something like this:
```c
// This is a function definition
// It prints out if a number is even
void isEven (int number) {
  if (number % 2 == 0) {
    printf("%d is even!", number);
  } else {
    printf("%d is not even!", number);
  }
}
```
This is a fairly trivial function but it still requires five lines to process. If we
have to write this multiple times our code will be cluttered with bits of logic that
may have little do with our programs end goal. Don't repeat yourself (DRY) if you don't
have to.

Consider these two examples:
```c
// No functions
int main(void) {
  int x, y;
  scanf("%d %d", &x, &y);
  if (x % 2 == 0) {
    printf("%d is even!", x)
  } else {
    printf("%d is not even!", y)
  }

  if (y % 2 == 0) {
    printf("%d is even!", y)
  } else {
    printf("%d is not even!", y)
  }
}

// isEven used
int main(void) {
  int x, y;
  scanf("%d %d", &x, &y);
  isEven(x);
  isEven(y);
}
```
There are a few things to note here.
1. Even though our program is very short, it's considerably less cluttered.
2. If our function is not working as expected we can track down the problem in a single space.
3. And, should we want to amend our isEven() function down the track, we only need adjust one part of our code.

## Advanced use cases
Modern software bring together 1000s of chunks of logic to do some amazing things, but the underlying ideas are the same. Pretend we're building a billion dollar app.

We might have high-level functions like:
```c
// initialise
void initialise(void) {
  images = getImageData();
  users = getUserData();
  database = startDatabase(users, images);
  authentication_key = retrieveKey();
  startServer(database, authentication_key);
}

// runs our app.
int main(void) {
  initialise();
  runApp();
}
```
Notice how initialise contains functions itself! Yes, you can do that, and it's very powerful.
Each of those sub functions, getImageData() for example, may contain 100s of lines of code, or
maybe functions within functions. But for the purpose of initialise() all we need to see is the
core logic of our high-level process. We have five lines summarising thousands, and we have clear, easy to follow and manage logic. This is the goal of good programming.
