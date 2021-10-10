---
title: How to troubleshoot Python NameError
author: arun-kc
tags: [tutorial, Python, troubleshooting]
publicationDate: October 10, 2021
description: Learn how to error handle the Python NameError
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: NameError in Python error handling
type: posts
---

If you are working in Python, and receive the following output, your code is attempting to access an identifier that is not defined in the local or global scope.

```python
NameError: name 'spam' is not defined
```

In this tutorial, we'll reproduce the issue and then go over some solutions.

## Reproducing the error

Let's write the following program, `name_error.py`. 

```python
def handler():
    spam = input("Enter a spam message: ")
    prnt(spam)

handler()
```

This small program creates a function that reads a spam message from the user and stores it into `spam` variable and tries to print it. But as you can see we have misspelled `print` as `prnt`.

If the program had `print` as it was meant to be, then the output is as indicated below.

```python
Enter a spam message: Its a spam!!
Its a spam!!
```

If, however, since we gave it as `prnt`, we will be able to reproduce the `NameError`.

```python
Enter a spam message: Its a spam!!
Traceback (most recent call last):
  File "name_error.py", line 5, in <module>
    handler()
  File "name_error.py", line 3, in handler
    prnt(spam)
NameError: name 'prnt' is not defined
```

## General causes for NameError

1. Misspelled built-in functions
    - How we reproduced the NameError in the above piece of snippet is due to misspelling the built-in function `print` as `prnt`

2. Using undefined variables
    ```python
    a = 10
    print(b) #using an undefined variable
    ```
3. Defining variable after usage
    ```python
    print(a) #using a before its defined
    a = 10
    ``` 
4. Incorrect usage of scope
    ```python
    def handler():
        spam = input("Enter a spam message: ")
        print(spam)

    handler()
    print(spam) #using spam outside the handler function
    ```
    
Now that we have been able to reproduce the error, let's go over possible solutions.

## Exception handling

The only approach is to handle the exception with a `try` / `except` clause that calls the `NameError`.

```python
def handler():
    try:
        print(spam)
        spam = input("Enter a spam message: ")
    
    except NameError:
        print('You are attempting to access an identifier that is not defined in the local or global scope.')

handler()
```

Here, we first have the program attempt our original workflow, but use the `except` clause to handle the `NameError` that we have anticipated. 

```python
You are attempting to access an identifier that is not defined in the local or global scope.
```

In this example, we have told the user that they cannot use an identifier that is not defined.

## Learn more

Search across open source Python repositories that have the `NameError` to understand the message more.

<SourcegraphSearch query="NameError: name 'spam' is not defined lang:python" patternType="literal"/>

Read the official Python docs on [Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html).

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).