---
title: How to use exception chaining in Python
authorSlug: david-lee
authorDisplayName: David Lee
tags: [tutorial, Python, troubleshooting]
publicationDate: October 18, 2021
description: Learn how to use Exception Chaining in Python
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: Exception Chaining in Python
type: posts
---

There may be times when an exception is thrown in Python and you might want to wrap that exception in another one in order to provide more information. You can accomplish this while providing messages for both exceptions in a full traceback. 

Here, we will observe the difference between this type of chaining and cases where an exception is raised due to an error in handling another exception.

## An exception occurring during the handling of another exception

Consider the following exception for an index error:

<PrismSyntaxHighlighter
input={`def example_mistake():
	try:
		[][1]
	except IndexError:
	    print('Indexing error', mistake)
 
example_mistake()`}
language='python'
/>

When we run this program, we'll call it `my_file.py`, we'll receive output similar to the following.

<OutputHighlighter
input='Traceback (most recent call last):
  File "my_file.py", line 3, in example_mistake
   [][1]
IndexError: list index out of range'
/>
  
During handling of the above exception, another exception occurred:

<OutputHighlighter
input={`Traceback (most recent call last):
  File "my_file.py", line 7, in <module>
  File "my_file.py", line 5, in example_mistake
   print('Indexing error', mistake)
NameError: name 'mistake' is not defined`}
/>

Notice the key phrase between the two tracebacks:

```
During handling of the above exception, another exception occurred:
```

Here, we observe the __context__ attribute of the exception object showing that another exception occurred within the handling of the original exception.

## Exception chaining

Now consider this next case where a developer can provide an improved error message. It is possible during the handling of one exception that another exception can occur. 

We know that when we are debugging it's useful to have information about all exceptions. The __cause__ attribute of the exception makes it possible to obtain the chaining by using the `raise ... from` statement in Python:

<PrismSyntaxHighlighter
input={`def example_chaining():
	try:
		[][1]
	except IndexError as e:
		raise ValueError('Here is additional info: Invalid value') from e
 
example_chaining()`}
language='python'
/>

When you run this program, you'll receive output similar to the following. 

<OutputHighlighter
input='Traceback (most recent call last):
  File "my_file.py", line 3, in exampl_chaining
    [][1]
IndexError: list index out of range'
/>
 
The above exception was the direct cause of the following exception:

<OutputHighlighter
input={`Traceback (most recent call last):
  File "my_file.py", line 7, in <module>
    example_chaining()
  File "my_file.py", line 5, in example_chaining
    raise ValueError('Here is additional info: Invalid value') from e
ValueError: Here is additional info: Invalid value`}
/>

Again, notice the key phrase between the two tracebacks (`The above exception was the direct cause of the following exception:`). Here, that exception was wrapped with another one. Both exceptions are captured in the traceback.

## Disable chaining

Chaining can be disabled by using the `from None` motif within the `raise` clause. 

<PrismSyntaxHighlighter
input={`def example_chaining_disabled():
	try:
		[][1]
	except IndexError:
		raise ValueError from None
 
example_chaining_disabled()`}
language='python'
/>

When you run this program, you will get output that is similar to what is below.

<OutputHighlighter
input='Traceback (most recent call last):
  File "my_file.py", line 7, in <module> example_chaining_disabled()
  File "my_file.py", line 5, in example_chaining_disabled
    raise ValueError from None
ValueError'
/>

Now you can differentiate the two types of chained exception tracebacks. 

## Learn more

Search across open source Python repositories that have the `raise ... from` motif to understand how developers are working with exceptions.

<SourcegraphSearch query="raise ... from lang:python" patternType="structural"/>

Read the official Python docs on [Exception Chaining](https://docs.python.org/3/tutorial/errors.html#exception-chaining).

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).