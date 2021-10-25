---
title: How to troubleshoot Python Recursion Error 
author: yashrsharma44
tags: [tutorial, Python, troubleshooting]
publicationDate: October 26, 2021
description: Learn how to error handle Python RecursionError: maximum recursion depth exceeded in comparison
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: RecursionError in Python error handling
type: posts
---

While using Python, you may face this issue, if you use up the stack memory, more than allocated - 

<Highlighter

input='RecursionError: maximum recursion depth exceeded'

language='bash'

/>

This generally happens, when the user defined methods allocates more memory in the stack than the stack limit.

## Reproducing the error

Let's reproduce this error by creating a Python file - `fibonacci.py`. Fibonacci series computation is generally a standard algorithm, which can be solved in various ways, and each of the implementation is useful for demonstrating certain behaviours, in our case - showing how recursionError happens.

<Highlighter

input={`
def recursive_fibonacci(n):

	if n <= 1:
		return n
	return recursive_fibonacci(n-1) + recursive_fibonacci(n-2)

print(recursive_fibonacci(123456))
`}

language='python3'

/>
You can run this sccript using the command - `python3 fibonacci.py`. You would get this error while running this script - 

<Highlighter

input='
Traceback (most recent call last):
  File "fibonacci.py", line 9, in <module>
    recursive_fibonacci(123456)
  File "fibonacci.py", line 6, in recursive_fibonacci
    return recursive_fibonacci(n-1) + recursive_fibonacci(n-2)
  File "fibonacci.py", line 6, in recursive_fibonacci
    return recursive_fibonacci(n-1) + recursive_fibonacci(n-2)
  File "fibonacci.py", line 6, in recursive_fibonacci
    return recursive_fibonacci(n-1) + recursive_fibonacci(n-2)
  [Previous line repeated 995 more times]
  File "fibonacci.py", line 3, in recursive_fibonacci
    if n <= 1:
RecursionError: maximum recursion depth exceeded in comparison
'

language='bash'

/>

Now, that we have reproduced our error, let's discuss about the error, and how we can solve it.

## Increasing the Stack Size

We can resolve the `RecursionError` by increasing the stack size. Note that our fibonacci implementation has a time complexity of `O(2^n)`, which means, the solution would run normally in our machine for `n <= 32 - 40` depending on the machine. Beyond that, we will see that our program runs for eternity, and would not stop. 

Let's increase the stack size and see what happens - 

<Highlighter

input='
import sys

sys.setrecursionlimit(10**5)

def recursive_fibonacci(n):
    if n <= 1:
        return n

    return recursive_fibonacci(n-1) + recursive_fibonacci(n-2)

print(recursive_fibonacci(32))'

language='python3'

/>

This will make sure, we don't face the `RecursionError`, because we have increased the stack size. However, this is not suggested to be used in production environment, as it could very well make our program have large memory allocation, which could lead to OOM.

## Solution 2

Let us take a step back, and see what we can improve on our solution, especially algorithm wise. We know beforehand, that recursive functions don't fare well with the memory, and writing one makes us vulnerable to hitting the stack limit, which we don't want.

One way to improve on our implementation, is to convert a recursive problem into an iterative one. We can refactor our code to use an iterative version, and that is going to be more robust, as it would not allocate memory on stack. Recursive functions leave a memory footprint on stack, and having an exponential number of functions will create a mayhem for the stack.

<Highlighter

input='
def iterative_fibonacci(n):
    if n <= 1:
        return n

    n1, n2 = 0, 1
    for i in range(n):
        n1, n2 = n2, n1 + n2

    return n1


print(iterative_fibonacci(9))
print(iterative_fibonacci(123456))
'

language='python3'

/>

The above implementation doesn't have a chain of recursive calls, hence we can be confident that our method will not create a `RecursionError`. In fact, the implementation is so flawless, that we can run for values of `n` as `n <= 10**8`, because our new implementation has a time complexity of `O(N)`, which is one of the best time complexity you can have for your implementation.

## Learn more

Search across open source Python repositories that have the `RecursionError` to understand the message more.

<SourcegraphSearch query="RecursionError: maximum recursion depth exceeded in comparison lang:python" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).