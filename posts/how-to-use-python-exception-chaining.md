---
title: How to use Exception Chaining in Python
author: davidylee
tags: [tutorial, Python, troubleshooting]
publicationDate: October 18, 2021
description: Learn how to use Exception Chaining in Python
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: Exception Chaining in Python
type: posts
---

There might be times when an exception is thrown in Python and you might want to wrap that exception in another one (to provide more information). You can accomplish this while providing messages for both exceptions in a full traceback. Here we will observe the difference between this type of chaining and cases where an exception is raised due to an error in handling another exception.

## An exception occurring during the handling of another exception

Consider the following exception for an index error:

```python
def example_mistake():
	try:
		[][1]
	except IndexError:
	    print('Indexing error', mistake)

example_mistake()
```

Output:
```python
Traceback (most recent call last):
  File "<string>", line 3, in example
IndexError: list index out of range

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "<string>", line 7, in <module>
File "<string>", line 5, in example
NameError: name 'mistake' is not defined
```

Notice the key phrase between the two tracebacks (`During handling of the above exception, another exception occurred:`). Here we observe the __context__ attribute of the exception object showing that a mistake was made within the handling of the original exception.

## Exception chaining

Now consider this next case where a developer can provide an improved error message. It is possible during the handling of one exception that another exception can occur. We know that in the case of debugging having information about both can be useful. The __cause__ attribute of the exception makes it possible to obtain the chaining by using the `raise ... from` statement in Python3:

```python
def example_chaining():
	try:
		[][1]
	except IndexError as e:
		raise ValueError('Here is additional info: Invalid value') from e

example_chaining()
```

Output:
```python
Traceback (most recent call last):
  File "<string>", line 3, in example
IndexError: list index out of range

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "<string>", line 7, in <module>
  File "<string>", line 5, in example
ValueError: Here is additional info: Invalid value
```

Again, notice the key phrase between the two tracebacks (`The above exception was the direct cause of the following exception:`). Here we can see that the exception was simply wrapped with another one. Both exceptions are captured in the traceback.

## Disable chaining

Chaining can also be disabled by using the `from None` motif:

```python
def example_chaining_disabled():
	try:
		[][1]
	except IndexError:
		raise ValueError from None

example_chaining_disabled()
```

Output:
```python
Traceback (most recent call last):
  File "<string>", line 7, in <module>
  File "<string>", line 5, in example
ValueError
```

Now you can easily differentiate the two types of chained exception tracebacks. You may have not even known to note the difference between the two...!

## Learn more

Search across open source Python repositories that have the `raise ... from` motif to understand the message more.

<SourcegraphSearch query="Exception Chaining lang:python" patternType="literal"/>

Read the official Python docs on [Exception Chaining](https://docs.python.org/3/tutorial/errors.html#exception-chaining.

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).