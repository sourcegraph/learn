---
title: How to troubleshoot Python OSError
author: angelina-tresca
tags: [tutorial, Python, troubleshooting]
publicationDate: October 15, 2021
description: Learn how to error handle the Python OSError
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: OSError in Python error handling
type: posts
---

If you are working in Python, and receive the following output, your code is attempting to make an os operation that fails.

```python
OSError: [Errno X] description of the error
```

This error is raised by the [os module](https://docs.python.org/3/library/os.html) in Python when a system function 
returns a system-related error, including I/O failures.

It provides the numeric error code (Errno) and the corresponding error message as provided by the operating system.

In this tutorial, we'll reproduce the issue with one of the most common system functions: **"open"** and then go over some solutions.

*Keep in mind that there are other os functions that raise `OSError`. You can see [python os documentation](https://docs.python.org/3/library/os.html)
for more information about the system functions that could raise this exception.*

## Reproducing the error

Let's write the following program: `open_file.py`. 

```python
import os

def open_file():
    os.open("ghost_file.txt", os.O_RDONLY)

open_file()
```

This small program tries to open a file `ghost_file.txt` in read-only mode but this file 
does not exist in our filesystem. So, the function `open` throws the following exception:

```python
OSError: [Errno 2] No such file or directory: 'ghost_file.txt'
```

Now that we have been able to reproduce the error, let's go over possible solutions.

## Catch the exception

You can use a `try` / `except` clause to catch this exception and show another message, maybe log something or just ignore it.

```python
import os

def open_file():
    try:
        os.open("ghost_file.txt", os.O_RDONLY)
    except OSError as error:
        print(error)  # This will print the same as we saw before
        print("Oops! the file you are looking for is not here. Maybe you need to create it first?")

open_file()
```

Here, we first have the program attempt our original workflow, but use the `except` clause to handle the `OSError` that we have anticipated. 

```python
>>> open_file()
[Errno 2] No such file or directory: 'ghost_file.txt'
Oops! the file you are looking for is not here. Maybe you need to create it first?
```

In this example, we have told the user that they cannot open the file if it does not exist and also printed the original error.

## Create the file if it does not exist
The `open` function has an option that indicates to create the file if it does not exist. 
This will prevent the exception to be raised by creating a `ghost_file.txt` in your filesystem and opening it.

```python
import os

def open_file():
    os.open("ghost_file.txt", os.O_CREAT)

open_file()
```

## Learn more

Search across open source Python repositories that have the `OSError` to better understand the message.

<SourcegraphSearch query="OSError lang:python" patternType="literal"/>

Read the official Python docs on [Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html).

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).