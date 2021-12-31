---
title: How to troubleshoot Python IndexError
authorSlug: shailesh-kumar
authorDisplayName: Shailesh Kumar
tags: [tutorial, Python, troubleshooting]
publicationDate: October 27, 2021
description: Learn how to error handle Python IndexError
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header-2.png
imageAlt: Sourcegraph Learn
browserTitle: IndexError in Python error handling
type: posts
---

You may sometimes get an `IndexError` such as the following when running Python code.

<Highlighter
input='IndexError: list index out of range'
/>

An `IndexError` means that your code is trying to access an index in a list or other iterable that is invalid. This is usually because the index your program is attempting to access is out of bounds.

For example, if you have a list with five items and you try to access the sixth item, you will get an `IndexError`.
This can happen with strings, tuples, lists, and generally any data type that is indexable.

## Reproducing the error

Let's write the following program, `indexerr.py` .

<PrismSyntaxHighlighter
input={`programming_languages = ["Java", "Python", "C++", "JavaScript", "Go"]
index = input("Enter an integer to print an element at a given index: ")
 
print(programming_languages[index])
 `}
language='python'
/>

In this code, there is a list with five items in it, their index numbers range between `0` and `4` because Python begins its iterables at base `0`. In the variable `index` we will take an integer as an input, so a user can unknowingly enter a number greater than `4`, which would be out of bounds for this list. 

If the user enter any number between `0` and `4` then there will be no errors returned, as indicated in the output below.

<Highlighter
input='Enter an integer to print an element at a given index: 1
Python'
/>

If, however, the user enters `5`, we will be able to reproduce the `IndexError`.

<Highlighter
input='Traceback (most recent call last):
  File "indexerr.py", line 3, in <module>
    print(programming_languages[index])
IndexError: list index out of range'
/>

Now that we have been able to reproduce the error, let's go over possible solutions.

## Return a string with guidance 

Flow control and an `if`-`else` statement can be used to print output to give guidance, or give the user direction.

<PrismSyntaxHighlighter
input={`programming_languages = ["Java", "Python", "C++", "JavaScript", "Go"]
index = input("Enter an integer to print an element at a given index: ")
 
if (index > 4):
    print("The number you have entered is out of bounds for the list")
else:
     print(programming_languages[index])
 `}
language='python'
/>

Here, we first check whether `index` is greater than 4 and, if so, we print a string that states `The number you have entered is out of bounds for the list`.

<Highlighter
input='Enter an integer to print an element at a given index: 5
The number you have entered is out of bound for the list'
/>

Now, if the user enters `5` or any number greater than `5`, they will receive this guidance rather than having the program exit out with the `IndexError` message. 

## Exception handling

A second approach to troubleshoot this error is to handle the exception with a `try`-`except` clause that calls and catches the `IndexError`.

<PrismSyntaxHighlighter
input={`try:
    programming_languages = ["Java", "Python", "C++", "JavaScript", "Go"]
    index = input("Enter an integer to print an element at a given index: ")
    print(programming_languages[index])
 
except IndexError as e:
    print e
 `}
language='python'
/>

Here, we first have the program attempt our original workflow by wrapping it in a `try` statement. Next, we use the `except` clause to handle the `IndexError` that we have anticipated. 

<Highlighter
input='Enter an integer to print an element at a given index: 5
list index out of range'
/>

You can read more about using `try` and `catch` by reading about [handling exceptions in the Python documentation](https://docs.python.org/3/tutorial/errors.html#handling-exceptions).

## Learn more

Search across open source Python repositories that have the `IndexError` to understand the message more and learn how others are handling the error.

<SourcegraphSearch query="IndexError lang:python" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).
