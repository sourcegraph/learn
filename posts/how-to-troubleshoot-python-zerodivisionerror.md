---
title: How to troubleshoot Python ZeroDivisionError
author: lisa-tagliaferri
tags: [tutorial, Python, troubleshooting]
publicationDate: September 30, 2021
description: Learn how to error handle the Python ZeroDivisionError, division by zero
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: ZeroDivisionError division by zero in Python error handling
type: posts
---

If you are working in Python, and receive the following output, your code is attempting to divide a given number by zero.

```python
ZeroDivisionError: division by zero
```

In mathematics, division by 0 is undefined. Because of this, Python will issue the above error when your code tries to accomplish this undefined expression. 

In this tutorial, we'll reproduce the issue and then go over some solutions.

## Reproducing the error

Let's write the following program, `divide.py`. 

```python
def divide_two_numbers():
    a = input("Enter an integer: ")
    b = input("Enter another integer: ")

    c = int(a)/int(b)
    print(c)

divide_two_numbers()
```

This small program creates a function that divides `a` by `b` to return `c`. The integers `a` and `b` are input by the user of the program, so a user can unknowingly enter `0` as the second integer.

If the user enters `9` and then `3`, there will be no errors returned, as indicated in the output below.

```python
Enter an integer: 9
Enter another integer: 3
3.0
```

If, however, the user enters `9` and then `0`, we will be able to reproduce the `ZeroDivisionError`.

```python
Traceback (most recent call last):
  File "divide.py", line 8, in <module>
    divide_two_numbers()
  File "divide.py", line 5, in divide_two_numbers
    c = int(a)/int(b)
ZeroDivisionError: division by zero
```

Now that we have been able to reproduce the error, let's go over possible solutions.

## Return 0

You can use flow control in the form of an `if` / `else` statement to reach an alternate outcome. 

```python
def divide_two_numbers():
    a = input("Enter an integer: ")
    b = input("Enter another integer: ")

    c = (int(a)/int(b)) if int(b) != 0 else 0
    print(c)

divide_two_numbers()
```

In this example, we have the program check to ensure that `b` is not equal to `0`, and if it is to instead print `0`. In this case, our output with a `0` denominator would be a `0`.

```python
Enter an integer: 9
Enter another integer: 0
0
```

While this solution prevents an error, it does not give the feedback that our expression is undefined, and may not be the best solution for you, depending on the requirements of your program.

## Return a string with guidance 

Flow control and an `if` / `else` statement can also be used to print output to give guidance, or give the user direction.

```python
def divide_two_numbers():
    a = input("Enter an integer: ")
    b = input("Enter another integer: ")

    if int(b) == 0:
        c = "This expression is undefined."

    else:
        c = int(a)/int(b)

    print(c)

divide_two_numbers()
```

Here, we first check whether `b` is equivalent to `0`, and if so, we initialize `c` as a string that states that `This expression is undefined.`

```python
Enter an integer: 9
Enter another integer: 0
This expression is undefined.
```

You may want to provide even more guidance to the user, to let them know that they can't divide by `0`, or to put this workflow in a loop so that the user can try again.

## Exception handling

A third approach is to handle the exception with a `try` / `except` clause that calls the `ZeroDivisionError`.

```python
def divide_two_numbers():

    try:
        a = input("Enter an integer: ")
        b = input("Enter another integer: ")

        c = int(a)/int(b)

    except ZeroDivisionError:
        c = "You cannot divide by 0."

    print(c)

divide_two_numbers()
```

Here, we first have the program attempt our original workflow, but use the `except` clause to handle the `ZeroDivisionError` that we have anticipated. 

```python
Enter an integer: 9
Enter another integer: 0
You cannot divide by 0.
```

In this example, we have told the user that they cannot divide by 0 if they attempt to do so.

## Learn more

Search across open source Python repositories that have hthe `ZeroDivisionError` to understand the message more.

<SourcegraphSearch query="ZeroDivisionError: division by zero lang:python" patternType="literal"/>

Read the official Python docs on [Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html).

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).