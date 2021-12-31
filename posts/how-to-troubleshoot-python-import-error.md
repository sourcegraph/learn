---
title: How to troubleshoot Python ImportError
authorSlug: yashrsharma44
authorDisplayName: Yash Sharma
tags: [tutorial, Python, troubleshooting]
publicationDate: November 29, 2021
description: Learn how to error handle Python ImportError
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header-8.png
imageAlt: Sourcegraph Learn
browserTitle: ImportError in Python error handling
type: posts
---

Python's `ImportError` is a common exception that happens when we work with Python. There are various ways to make sure that we debug the root cause and handle the error gracefully if a given package is not available.

Let us review some common ways of reproducing the issue and how we can elegantly handle them.

## Reproducing the error

A typical Import Error looks like this - 

<PrismSyntaxHighlighter
input={`>>> import requests
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ImportError: No module named 'requests'`}
language='python'
/>

Here, we try to import the [Requests](https://docs.python-requests.org/en/latest/) module, but we cannot do so and therefore get the `ImportError` as output.

_Note that you may get `ModuleNotFoundError` if you are using Python3.6+, as Python has subclassed this error from `ImportError`._

## Making sure the package is installed

First of all, we should make sure that the module we are trying to import is installed in our local machine.

If not, we should install the package using Python's package manager pip.

<PrismSyntaxHighlighter
input={`pip install requests`}
language='bash'
/>

Once installed, we can import the module and we would not face issues.

## Error handling for import issues

Sometimes the issue is not because we are missing a given package. We may be trying to access a method or class of a module that has changed in some way, or we may be trying to import a nonexistant method from a package that we do have installed.

Let's review what may cause issues in each of those cases, and a solution to preventing those issues going forward. 

### Accessing a private method/class of a module

There are some cases where a package may change the API contract that may render new changes backwards incompatible, and therefore make a definition private or otherwise unavailable instead of public. 

<PrismSyntaxHighlighter
input={`import gw_utility.Book
print(Book.print_name())`}
language='python'
/>

On running the above code, you will get this error:

<Highlighter
input={`Traceback (most recent call last):
  File "../test.py", line 1, in <module>
    import gw_utility.Book
ModuleNotFoundError: No module named 'gw_utility'`}
language='bash'
/>

The above error `ModuleNotFoundError` subclasses `ImportError`, so we can handle the exception created, if things go out of hand.

### Import an unexisting method

There may be an instance where we try to import an nonexistant method.

<PrismSyntaxHighlighter
input={`from test_module import Hello
print(Hello.get_name())`}
language='python'
/>

This creates another `ImportError` issue.

<Highlighter
input={`Traceback (most recent call last):
  File "test.py", line 1, in <module>
    from test_module import Hello
ImportError: cannot import name 'Hello' from 'test_module' (unknown location)'`}
language='bash'
/>

Here, we are calling a method that does not exist. 

### Solution to the above cases

One of the ways to make sure that your code doesn't break when importing methods which can get removed in the future, is to always use error handling. If we know a given package is going to be changing drastically in a short amount of time because it is in active development, this is an approach to future-proofing our program. 

We can embed our imports in a `try`-`except` clause, making sure that we handle any future errors gracefully. 

<PrismSyntaxHighlighter
input={`try:
    from test_module import Hello
    print(Hello.get_name())
 
except ImportError as error:
    print(error.__class__.__name__ + ": " + error.msg)
`}
language='python'
/>

Here, any packages or package methods that the program does not have access to will throw an exception to handle the error. In this case the user will receive `ModuleNotFoundError: No module named 'test_module'` as their output.

## Learn more

Search across open source Python repositories that have the `ImportError`. You may especially want to review those repositories that are using the error in their exception blocks. 

<SourcegraphSearch query="ImportError" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).
