---
title: How to troubleshoot Python IndentationError unexpected indent
author: kshivendu
tags: [tutorial, Python, troubleshooting]
publicationDate: October 30, 2021
description: Learn how to error handle Python IndentationError unexpected indent
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: IndentationError unexpected indent in Python error handling
type: posts
---

IndentationError ensures that your code has a consistent indentation in the different code blocks and complies with indentation expected by the Python interpreter. Additional spaces or tabs lead to "IndentationError: unexpected indent" error.

## Reproducing the error

Let's write the following program: `intendation_error.py`. 

```python
def example():
    for i in range(3):
        print('i is {}'.format(i))

    print('Checkpoint 1')
        print('Checkpoint 2') # Note the additional tab

example()
```

The line containing `print('Checkpoint 2')` has an additional tab that leads to IndentationError

```python
  File "indentation_error.py", line 6
    print('Checkpoint 2') # Note the additional tab
    ^
IndentationError: unexpected indent
```

Now that we have been able to reproduce the error, let's go over possible solutions.

## Remove extra spaces/tabs

Just like any other python error, we should read the error message to understand the problem. In our example, the problem appears to be coming from the 6th line where `print('Checkpoint 2')` has an extra tab compared to the other lines in the `example()` block. If we remove that additional tab, the error will be gone.

```python
def example():
    for i in range(3):
        print('i is {}'.format(i))

    print('Checkpoint 1')
    print('Checkpoint 2') # Note the additional tab

example()
```

The program starts working, and we get the following output:

```Checkpoint 0
i is 0
i is 1
i is 2
Checkpoint 1
Checkpoint 2
```

It is the recommended way for solving IndentationError as it keeps the lines smaller. 

## Add extra spaces/tabs

IndentationError can be fixed by increasing the indentation level of all the lines in the code block that raises the error.
In our example, we have to add the same extra tab in all the lines inside the `example()` block. The code should then appear like this:

```python
def example():
        for i in range(3):
            print('i is {}'.format(i))

        print('Checkpoint 1')
        print('Checkpoint 2') # Now all the lines have an extra tab

example()
```

The program starts working, and we'll get the same output as the 1st method.

Note that the 2nd method isn't the recommended way of fixing IndentationError. The first approach (Remove extra spaces/tabs) is much better as it leads to more readable and smaller code.

## Learn more

Search across open source Python repositories that have the `IndentationError: unexpected indent` to understand the message more.

<SourcegraphSearch query="IndentationError: unexpected indent lang:python" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).
