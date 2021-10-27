---
title: How to troubleshoot Python recursion error 
author: yashrsharma44
tags: [tutorial, Python, troubleshooting]
publicationDate: October 26, 2021
description: Learn how to error handle Python RecursionError - maximum recursion depth exceeded in comparison
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: RecursionError in Python error handling
type: posts
---

While using Python, you may face this issue if you use up the stack memory more than allocated. This occurs when your program is attempting to use considerable available memory.

<Highlighter
input='RecursionError: maximum recursion depth exceeded'
language='bash'
/>

 Python's interpreter limits memory allocation and stack in order to prevent overflow, so this error generally happens when the user-defined methods allocates more memory in the stack than the set stack limit.

## Reproducing the error

Let's reproduce this error by creating a Python file called `fibonacci.py`. 

[Fibonacci series](https://en.wikipedia.org/wiki/Fibonacci_number#Sequence_properties) computation is generally a standard algorithm, which can be solved in various ways, and each of the implementations is useful for demonstrating certain behaviors. In our case, we'll be using this algorithm to demonstate the `RecursionError` through creating a recursive function.

<Highlighter
input={`def recursive_fibonacci(n):
    if n <= 1:
        return n
    return recursive_fibonacci(n-1) + recursive_fibonacci(n-2)
 
print(recursive_fibonacci(123456)) 
`}
language='python'
/>

Run this script using the command `python3 fibonacci.py` command. You will get output similar to the following, including the error message. 

<Highlighter
input='Traceback (most recent call last):
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
RecursionError: maximum recursion depth exceeded in comparison'
language='bash'
/>

You may alternately receive a `RuntimeError: maximum recursion depth exceeded` message.

Now that we have reproduced our error, let's discuss how we can solve it.

## Increasing the stack size

Though it is not generally a recommended solution, the `RecursionError` message can technically be resolved through increasing the stack size. 

Note that our Fibonacci implementation has a time complexity of `O(2^n)`, which means the solution would run normally in our machine for `n <= 32 - 40` depending on the machine. Beyond that, our program could theoretically run for eternity without stopping. 

Let's explore our example program through increasing the stack size.

<Highlighter
input={`import sys
  
 
sys.setrecursionlimit(10**5)
 
 
def recursive_fibonacci(n):
    if n <= 1:
        return n
    return recursive_fibonacci(n-1) + recursive_fibonacci(n-2)
 
print(recursive_fibonacci(32))
 `}
language='python'
/>

This solution will make sure that we don't face the `RecursionError` because we have increased the stack size. Your output upon running this program should be `2178309`.

**This solution is not recommended to be used in production environment**, as it could very well make our program have large memory allocation, which could lead to [OOM](https://en.wikipedia.org/wiki/Out_of_memory).

It is worth understanding the concept of stack size and stack size increases. However, you should only make modifications on stack size when you can access the physical hardware that your program is running on, and when you understand all implications of stack size modifications. 

## Writing an iterative version

Let us take a step back and work to improve our solution from an algorithmic perspective. We know that recursive functions don't fare well with memory, and writing one makes us vulnerable to hitting the stack limit, which we don't want. Recursive functions leave a memory footprint on stack and having an exponential number of functions will create mayhem for the stack.

One way to improve on our implementation is to convert a recursive problem into an iterative one. We can refactor our code to use an iterative version, and this version will be more robust as it would not allocate memory on stack.

<Highlighter
input={`def iterative_fibonacci(n):
    if n <= 1:
        return n
    n1, n2 = 0, 1
    for i in range(n):
        n1, n2 = n2, n1 + n2
    return n1
 
print(iterative_fibonacci(9))
print(iterative_fibonacci(123456))
`}
language='python'
/>

The above implementation doesn't have a chain of recursive calls, hence we can be confident that our method will not create a `RecursionError`. In fact, the implementation is so flawless that we can run for values of `n` as `n <= 10**8` because our new implementation has a time complexity of `O(N)`, which is one of the best time complexities you can have for your implementation.

Your output should be `34` for the first `print()` statement, and a long string of numbers for the second `print()` statement, which begins with `2683055765028209` and ends with `96309236251392`.

## Learn more

Search across open source Python repositories that have the `RecursionError` to understand the message more and learn how others are handling this error. 

<SourcegraphSearch query="RecursionError: maximum recursion depth exceeded in comparison lang:python" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).
