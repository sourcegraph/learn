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

This small program creates a function that reads a spam message from the user and stores it into the `spam` variable and tries to print it. But, within this program, we have misspelled `print` as `prnt`.

If the program had `print` as it was meant to be, then the output is as indicated below.

```sh
Enter a spam message: It's a spam!!
It's a spam!!
```

With the misspelled function `prnt`, we are able to reproduce the `NameError`.

```sh
Enter a spam message: It's a spam!!
Traceback (most recent call last):
  File "name_error.py", line 5, in <module>
    handler()
  File "name_error.py", line 3, in handler
    prnt(spam)
NameError: name 'prnt' is not defined
```

There are several causes for the Python `NameError`, which we'll describe in more detail below.

## General causes for `NameError`

The example we used above was a misspelling of a built-in function that causes the `NameError`. Below are the general causes for this issue.

### Misspelling built-in functions

This is how we reproduced the `NameError` in the above section that included the misspelling of the built-in function `print()` as `prnt()`. 

In this instance, a recovery is possible through spell-checking your built-in functions. IDEs (code editors) often provide support for this through underlining code that may be incorrect (as in word processing programs), or offer [spelling](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) [extensions](https://marketplace.visualstudio.com/items?itemName=ban.spellright).

### Using undefined variables

If you attempt to call a variable before defining it, you will also receive a `NameError` error message. 

```python
a = 10
print(b)
```

In this case, you'll receive output similar to the following.

```sh
NameError: name 'b' is not defined
```

One way to recover from this error would be to ensure that you are only calling defined variables, or to define the missing variable after receiving the above error. 

### Using a variable prior to defining it

Similar to the example above, if you call a variable prior to defining it, you will also receive the `NameError` from the Python interpreter, as in this example that uses `a` in a function prior to its definition. 

```python
print(a)
a = 10
``` 

Here, you will receive the guidance that `a` is not defined. 


```sh
NameError: name 'a' is not defined
```

In these cases, you can be sure that you define variables prior to usage. You will often want to define all variables early on in the writing of your program.

### Incorrect usage of scope

When writing programs in Python, you should be aware of the scope of your variables. In the example below, `spam` is defined within the `handler()` function, and is therefore scoped locally to the function. However, we try to call the variable outside of the function context. 

```python
def handler():
    spam = input("Enter a spam message: ")
    print(spam)

handler()
print(spam) #using spam outside the handler function
```

Because we have attempted to use `spam` within a global context outside of the function it belongs to, we receive the following `NameError` message as output, which states that `spam` is not defined.

```sh
Traceback (most recent call last):
  File "name_error.py", line 6, in <module>
    print(spam)
NameError: name 'spam' is not defined
```

In this case, we coud rewrite the program to make `spam` a global variable, defining it outside of the context of the `handler()` function. This ensures that both the function and the rest of the program can access the `spam` variable.

```python
spam = input("Enter a spam message: ")

def handler():
    print(spam)

handler()
print(spam)
```

While this is creating redundant code that prints `spam` twice, we no longer receive an error message. In this case, it would be worthwhile to think through what you are attempting to do and to consider how to scope your variables prior to releasing your program. You can learn more about Python scope through [W3Schools](https://www.w3schools.com/python/python_scope.asp).

In the next section, we will walk you through a solution that is universal to all of the examples above. 

## Exception handling

The reccomended approach to preventing the `NameError` from stopping your program is to handle the exception with a `try` / `except` clause that calls the `NameError`.

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

```sh
You are attempting to access an identifier that is not defined in the local or global scope.
```

In this example, we have told the user that they cannot use an identifier that is not defined, because they are calling the `spam` variable prior to definint it.

## Learn more

Search across open source Python repositories that have the `NameError` to understand the message more.

<SourcegraphSearch query="NameError: name 'spam' is not defined lang:python" patternType="literal"/>

Read the official Python docs on [Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html).

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).