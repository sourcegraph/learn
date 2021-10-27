---
title: How to Troubleshoot Python AttributeError
author: masonwoodford
tags: [tutorial, Python, troubleshooting]
publicationDate: October 27, 2021
description: Learn how to error handle the Python AttributeError
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: AttributeError in Python error handling
type: posts
---

If you are working in Python, and receive the following output, your code is attempting to reference an invalid attribute reference.

<Highlighter
input='AttributeError'
language='python'
/>

In Python, objects of classes contain various methods and values that can be accessed. These are considered 'attributes'.
If you try to access an attribute of an object that the class has not defined, you trigger an AttributeError.

In this tutorial, we'll reproduce the issue and then go over some solutions.

## Reproducing the error
Let's write a program called `find_length_of_list.py`.

<Highlighter
input={`def find_length_of_list(num):
    num.length()
    
find_length_of_list([5, 10, 20])`}
language='python'
/>

The problem with this program is that lists have no method attribute length().
Instead, the list should be passed in as an argument to the len() function.

Here is one more example in the program `sort_people_by_age.py`. 

<Highlighter
input={`def sort_people_by_age():
    people = {"John": 25, "Sara": 34, "George": 16}
    people.sort()
    
sort_people_by_age()`}
language='python'
/>

This small program creates a dictionary containing names as keys and ages as values.
It triggers an attribute error because dictionaries have no sorting method.

Now that we have been able to reproduce the error, let's go over possible solutions.

## Calling help()

Since attribute errors mainly arise from misunderstanding what attributes a class contains 
or from typos, one solution to attribute errors is to call help() on an object.

<Highlighter
input={`nums = [5, 10, 20] 
help(nums)
help(dict)
help(len)`}
language='python'
/>

Here, calling help() on nums and dict prints out all the methods and data associated with the list and dict Python classes.
Help can even be called on functions themselves to see how the function operates, as seen in the call to help(len). This
information can be invaluable when troubleshooting attribute errors.

## Learn more

Other recommendations for fixing AttributeErrors include checking your code for typos, utilizing IDEs with intelligent
code completion, and reading the official Python documentation on [built-in types](https://docs.python.org/2/library/stdtypes.html).

<SourcegraphSearch query="AttributeError lang:python" patternType="literal"/>

Read the official Python docs on [Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html).

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).