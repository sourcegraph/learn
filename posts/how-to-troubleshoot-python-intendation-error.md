---
title: How to troubleshoot Python IndentationError unexpected indent
authorSlug: kshivendu
authorDisplayName: Kumar Shivendu
tags: [tutorial, Python, troubleshooting]
publicationDate: November 29, 2021
description: Learn how to error handle Python IndentationError unexpected indent
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header-5.png
imageAlt: Sourcegraph Learn
browserTitle: IndentationError unexpected indent in Python error handling
type: posts
---

Python `IndentationError` ensures that your code has a consistent indentation to differentiate code blocks and complies with indentation expected by the Python interpreter. Additional spaces or tabs lead to the `IndentationError: unexpected indent` error message.

The PEP8 style guide prefers [spaces to tabs](https://www.python.org/dev/peps/pep-0008/#tabs-or-spaces) and instructs that developers should use [4 spaces per indentation level](https://www.python.org/dev/peps/pep-0008/#indentation). 

## Reproducing the error

Let's write the following program: `intendation_error.py`. 

<PrismSyntaxHighlighter
input={`def example():
    for i in range(3):
        print('i is {}'.format(i))
 
    print('Checkpoint 1')
        print('Checkpoint 2') # Note the additional spacing
 
example()
 `}
language='python'
/>

The line containing `print('Checkpoint 2')` has additional spacing that leads to an output of `IndentationError`.

<Highlighter
input={`File "indentation_error.py", line 6
    print('Checkpoint 2') # Note the additional spacing
    ^
IndentationError: unexpected indent`}
/>

The additional spacing could have been caused by extra spacebar spaces or the `TAB` key.

Now that we have been able to reproduce the error, let's go over possible solutions.

## Remove extra spaces and tabs

Just like any other Python error, we should read the error message to understand the problem. In our example, the problem appears to be coming from the sixth line where `print('Checkpoint 2')` has extra spacing compared to the other lines in the `example()` block. If we remove that additional spacing, the error will be gone.

<PrismSyntaxHighlighter
input={`def example():
    for i in range(3):
        print('i is {}'.format(i))
  
    print('Checkpoint 1')
    print('Checkpoint 2') # Note the additional tab
 
example()
 `}
language='python'
/>

The program starts working, and we receive the following output.

<Highlighter
input={`i is 0
i is 1
i is 2
Checkpoint 1
Checkpoint 2`}
/>

This is the recommended way for solving `IndentationError` as it keeps the lines smaller. 

## Add extra spaces 

Python's `IndentationError` can also be fixed by increasing the indentation level of all the lines in the code block that raises the error.

In our example, we can add the same extra space in all the lines inside the `example()` block. The code would then appear like this:

<PrismSyntaxHighlighter
input={`def example():
        for i in range(3):
            print('i is {}'.format(i))
 
        print('Checkpoint 1')
        print('Checkpoint 2') # Now all the lines have an extra tab
 
example()
 `}
language='python'
/>

The program starts working, and we'll get the same output as the first method.

Note that this second approach isn't the recommended way of fixing `IndentationError`. The first approach leads to more readable code that has a smaller footprint.

However, in a different program you may find that you did not have _enough_ spaces, and in this case you will need to add additional spacing.

## Learn more

Search across open source Python repositories that have the `IndentationError: unexpected indent` to understand how others handle the error.

<SourcegraphSearch query="IndentationError: unexpected indent lang:python" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).
