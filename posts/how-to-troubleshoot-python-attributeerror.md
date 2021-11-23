---
title: How to Troubleshoot Python AttributeError
authorSlug: mason-woodford
authorDisplayName: Mason Woodford
tags: [tutorial, Python, troubleshooting]
publicationDate: November 22, 2021
description: Learn how to error handle the Python AttributeError
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: AttributeError in Python error handling
type: posts
---

If you are working in Python, and receive the following output, your code is attempting to reference an invalid attribute reference.

<Highlighter
input='AttributeError'
language='bash'
/>

In Python, objects of classes contain various methods and values that can be accessed. These are considered _attributes_. If you try to access an attribute of an object that the class has not defined, you trigger an `AttributeError`.

In this tutorial, we'll reproduce the issue and then go over some solutions.

## Reproducing the error

Let's write a program called `find_length_of_list.py`.

<Highlighter
input={`def find_length_of_list(num):
    num.length()
 
find_length_of_list([5, 10, 20])`}
language='python'
/>

The problem with this program is that lists have no method attribute `length()`. 

<Highlighter
input={`AttributeError: 'list' object has no attribute 'length'`}
language='bash'
/>

Instead, the list should be passed in as an argument to the `len()` function.

Here is one more example of this error in the program `sort_people_by_age.py`. 

<Highlighter
input={`def sort_people_by_age():
    people = {"John": 25, "Sara": 34, "George": 16}
    people.sort()
 
sort_people_by_age()`}
language='python'
/>

This small program creates a dictionary containing names as keys and ages as values. It triggers an attribute error because the dictionary data type has no sorting method.

Now that we have been able to reproduce the error, let's go over possible solutions.

## Calling `help()`

Since attribute errors mainly arise from misunderstanding what attributes a class contains, or it occurs due to typos, one solution to attribute errors is to call `help()` on an object.

<Highlighter
input={`nums = [5, 10, 20] 
help(nums)
help(dict)
help(len)`}
language='python'
/>

Here, calling `help()` on `nums` and `dict` prints out all the methods and data associated with the `list` and `dict` Python classes.

Help can even be called on functions themselves to see how the function operates, as you can verify in the call to `help(len)`. This information can be invaluable when troubleshooting attribute errors.

## Rewrite programs with valid attributes

Now that we have reviewed the resources available to us with `help()`, we can rewrite the programs we had trouble with using valid attributes. 

To fix the first program, `find_length_of_list.py`, which has an issue with the list, we can rewrite the program to pass the `num` list to the `len()` function. The built-in function `len()` will calculate the length of any iterable. 

<Highlighter
input={`def find_length_of_list(num):
    len(num)
 
find_length_of_list([5, 10, 20])`}
language='python'
/>

Running this program now, we'll receive no errors. If we wrap `len(num)` in a `print()` function — `print(len(num))` — we'll receive `3` as output, signifying the length of the list. 

In our second program, `sort_people_by_age.py`, we can make use of the built-in Python function `sorted()` which can be used on iterables including dictionaries. 

<Highlighter
input={`def sort_people_by_age():
    people = {"John": 25, "Sara": 34, "George": 16}
    people_list = sorted(people.items(), key=lambda x:x[1])
    sort_people = dict(people_list)
    print(sort_people)
 
sort_people_by_age()`}
language='python'
/>

Here, we have sorted the items of the `people` dictionary and passed that value into a `people_list` which we return back into a dictionary. Finally, we printed it out so that we can verify that it is correct. 

<Highlighter
input={`{'John': 25, 'Sara': 34, 'George': 16}`}
language='bash'
/>

For your purposes, you may not need to turn this back into a dictionary, but may just need to pass the values to other functionality in the program. 

You can read more about `sorted()` via the official Python docs on [sorting functions](https://docs.python.org/3/library/functions.html#sorted).

## Learn more

Other recommendations for fixing `AttributeErrors` include checking your code for typos, utilizing IDEs with intelligent
code completion, and reading the official Python documentation on [built-in types](https://docs.python.org/2/library/stdtypes.html).

You can also review how developers are handling the Python `AttributeError` across open source by searching across code:

<SourcegraphSearch query="AttributeError lang:python" patternType="literal"/>

Read the official Python docs on [Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html).

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).