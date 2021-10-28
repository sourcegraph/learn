---
title: How to troubleshoot Python ImportError
author: yashrsharma44
tags: [tutorial, Python, troubleshooting]
publicationDate: October 29, 2021
description: Learn how to error handle Python ImportError
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: ImportError in Python error handling
type: posts
---

**Import Error** is a common exception that happens whenever we work with Python. It is a common issue that happens, and there are various ways to make sure, we debug the root cause, and handle the error gracefully, if the package is not available.

Let us see some common ways of reproducing the issue and how we can gracefully handle them.

## Reproducing the error

A typical Import Error looks like this - 

<Highlighter
input={`>>> import requests
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ImportError: No module named 'requests'`}
language='python'
/>

Here we can see that we try to import requests module, but we cannot do so, and instead get the `ImportError`

_Note that, you may get `ModuleNotFoundError` if you are using Python3.6+, as Python has subclassed this error from `ImportError`._

## Making sure the package is installed

First of all, we should make sure that the module we are trying to import is installed in our local machine.

If not, we should install the same using Python's package manager - `pip`

<Highlighter
input={`pip install requests`}
language='bash'
/>

Once installed, we can import it, and we would not face issues.

## Error handling for Import issues

In case we are trying to - 
*  access a method/class of a module
*  import an unexisting method

### Accessing a private method/class of a module

There are some cases, where a package might change the API contract(make the changes backwards incompatible), and make a definition private/unavailable instead of public. 

<Highlighter
input={`import gw_utility.Book
print(Book.print_name())
`}
language='python'
/>

On running the above code, you will get this error - 

<Highlighter
input={`Traceback (most recent call last):
  File "../test.py", line 1, in <module>
    import gw_utility.Book
ModuleNotFoundError: No module named 'gw_utility'`}
language='bash'
/>

The above error `ModuleNotFoundError` subclasses `ImportError`, so we can handle the exception created, if things go out of hand.

### Import an unexisting method

There might be an instance, where we try to import an un-existing method.

<Highlighter
input={`from test_module import Hello
print(Hello.get_name())
`}
language='python'
/>

This creates another `ImportError` issue - 

<Highlighter
input={`Traceback (most recent call last):
  File "test.py", line 1, in <module>
    from test_module import Hello
ImportError: cannot import name 'Hello' from 'test_module' (unknown location)'`}
language='bash'
/>

### Solution to the above cases

One of the ways to make sure, that your code doesn't break, when importing methods which can get removed in future, is using error handling.

We can embed our imports in a `try except` clause, and this makes sure that we handle the error gracefully - 


<Highlighter
input={`try:
    from test_module import Hello
    print(Hello.get_name())
except ImportError as error:
    print(error.__class__.__name__ + ": " + error.msg)
`}
language='python'
/>

## Learn more

Search across open source Python repositories that have the `ImportError` to understand the message more.

<SourcegraphSearch query="ImportError" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).
