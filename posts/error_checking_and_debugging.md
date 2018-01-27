---
title: Error Checking
stub: Error checking and debugging in C
tags: explainers,c
---
Even the best programmers in the world make mistakes. And mistakes, lead to bugs.
But what we do to prevent and minimise those mistakes occurring is a real skill.

## Writing "good code"

One of the simplest ways of dealing with errors is to prevent them
from occurring in the first place. By writing good code you reduce the chances
of introducing error into your program. The style guide outlines some good practices
to enforce this, but here are some other reasons errors occur.

* General poor style
    * Large blocks of logic in one place, bad or inconsistent indentation, etc.
* Leaving variables uninitialised
    * Remember to give a variable a starting value, ie int x = 0.
* Not accounting for unexpected input
    * Think about how your functions are used, and whether obvious use cases are being properly dealt with
* Forgetting to free memory
    * A more advanced concept that can cause unexpected behaviour in your program. Use free() to avoid this.
* Global variables
    * It's generally good practice to avoid using global variables because they can easily be misused, but if you do use them, always declare them with caps. ie, int MY_GLOBAL = 0;

## The compiler is your friend

Despite how annoying the compiler may be at times with all its error/warning messages,
ultimately it's trying to help you write better software.

Invest time into understanding error/warning output. Understanding error outputs will allow you to quickly find and deal with your problem in the best possible way.

If you can (if it's available on your machine), try to compile with dcc over gcc. The dcc compiler picks up on a few extra things that gcc will overlook. If you do use gcc, compile with the -Wall and -Werror flags.

Finally, compile as frequently as you can! It's much easier to deal with a few small errors at a time, than tens, or hundreds all in one go.

## Printing output

Printing output is a useful method when your program gives an unexpected output. It allows us to see the "flow" of the program with the output acting as markers to highlight where the program is going.

In this example for instance our output is not the "One loop" expected.

```c
int n = 0;
printf("n value initialised\n", );

while (n != 0) {
    printf("One loop\n", );
    n++;
}
```
Instead we get the output:

```bash
n value initialised
```

So we know the program got up to that point successfully before failing to exectute the loop, meaning the condition in the while loop must be false. Using this method we can analyse the execution flow of the program and pinpoint the source of our unexpected output.

### Extending print debugging

Another common use of print debugging is to check the values of variables at various points in our program. In the below example we can check what's going on inside our adder function to see everything is as expected.

```c
int adder (int x, int y) {
    printf("Inside adder function\nx = %d, y = %d\n", x, y);
    return (x + y);
}
```

## Remain calm

Perhaps the most important piece of advice we can give you is to remember to keep calm.
Whatever errors you're seeing, it's never the end of the world. Try and identify the simplest ones you can tackle  immediately and make what progress you can. Preventing yourself from getting
overwhelmed will almost always deliver you better outcomes than panicking and
making dramatic changes to your program to appease the compiler. Take it slow. Be
methodical. You'll get there!
