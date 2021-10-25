---
title: How to troubleshoot Python IndexError
author: Shailesh Kumar
tags: [tutorial, Python, troubleshooting]
publicationDate: October 25, 2021
description: Learn how to error handle Python IndexError
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: IndexError in Python error handling
type: posts
---

You may sometimes get an IndexError such as the following when running your code.
<Highlighter
input='IndexError: list index out of range'
language='python'
/>

An IndexError means that your code is trying to access an index that is invalid. This is usually because the index goes out of bounds.

For example, if you have a list with five items and you try to access the sixth item, you will get an IndexError.
This can happen with strings, tuples, lists, and generally any object that is indexable.

## Reproducing the error
Let's write the following program, `indexerr.py` .
<Highlighter
input={`
    programming_languages = ["Java", "Python", "C++", "JavaScript", "Golang"]
    index = input("Enter an integer to print an element at a given index: ")
    print(programming_languages[index])
  `}
language='python'
/>

In this code there is an array with five items in it. In the variable `index` we will take an integer as an input, so a user can unknowingly enter a number greater than 4.

If the user enter any number between `0` and `4` then there will be no errors returned, as indicated in the output below.
<Highlighter
input='Enter an integer to print an element at a given index: 1
Python'
language='python'
/>

If, however, the user enters `5`, we will be able to reproduce the `IndexError`.
<Highlighter
input={`Traceback (most recent call last):
  File "indexerr.py", line 3, in <module>
    print(programming_languages[index])
IndexError: list index out of range`}
language='python'
/>

Now that we have been able to reproduce the error, let's go over possible solutions.

## Return a string with guidance 
Flow control and an `if` / `else` statement can be used to print output to give guidance, or give the user direction.
<Highlighter
input={`
    programming_languages = ["Java", "Python", "C++", "JavaScript", "Golang"]
    index = input("Enter an integer to print an element at a given index: ")
    if (index > 4):
        print("The number you have entered is out of bound for the array")
    else:
        print(programming_languages[index])
  `}
language='python'
/>
Here, we first check whether `index` is greater than 4, and if so, we print a string that states that `The number you have entered is out of bound for the array`
<Highlighter
input='Enter an integer to print an element at a given index: 5
The number you have entered is out of bound for the array'
language='python'
/>


## Exception handling
Second approach is to handle the exception with a `try` / `except` clause that calls the `IndexError`.
<Highlighter
input={`
 
    try:
        programming_languages = ["Java", "Python", "C++", "JavaScript", "Golang"]
        index = input("Enter an integer to print an element at a given index: ")
        print(programming_languages[index])
 
    except IndexError as e:
        print e
`}
language='python'
/>

Here, we first have the program attempt our original workflow, but use the `except` clause to handle the `IndexError` that we have anticipated. 
<Highlighter
input='Enter an integer to print an element at a given index: 5
list index out of range'
language='python'
/>

## Learn more

Search across open source Python repositories that have the `IndexError` to understand the message more.

<SourcegraphSearch query="IndexError lang:python" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).
