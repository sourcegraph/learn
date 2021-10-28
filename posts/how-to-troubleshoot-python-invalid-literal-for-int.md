---
title: "How to troubleshoot Python ValueError: invalid literal for int() with base 10"
author: angelina-tresca
tags: [tutorial, Python, troubleshooting]
publicationDate: October 28, 2021
description: "Learn how to error handle Python ValueError: invalid literal for int() with base 10"
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: "ValueError: invalid literal for int() with base 10 in Python error handling"
type: posts
---

If you are working in Python, and receive the following output, your code is trying to convert a string value that is not formatted as an integer.

```python
ValueError: invalid literal for int() with base 10
```

In this tutorial, we'll reproduce the issue and then go over some solutions.

## Reproducing the error

Let's write the following program, `integer.py`:

```python
def convert_to_integer():
    user_input = input("Enter a number: ")
    int_number = int(user_input)
    print(int_number)

convert_to_integer()
```
This small program creates a function that receives a string from the user input and parses it to integer.

If the user enters `17` there will be no errors returned as indicated in the output below.

```python
Enter a number: 17
17
```

If, however, the user enters `17.2` we will be able to reproduce the `ValueError` because that number is not an integer so it can't be parsed.

```python
Enter a number: 17.2
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 3, in convert_to_integer
ValueError: invalid literal for int() with base 10: '17.2'
```

The same happens if the user enters a string that is not representing a number.

```python
Enter a number: hello
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 3, in convert_to_integer
ValueError: invalid literal for int() with base 10: 'hello'
```

Now that we have been able to reproduce the error, let's go over possible solutions.

## Check the user input

You can check that the user input only has numbers before parsing it to integer. Python strings have the `isdigit` function that indicates whether all characters in a string (regardless of length) are digits.

```python
def convert_to_integer():
    user_input = input("Enter a number: ")

    # If the user input has any characters that are not numbers, shows a message and exits the function
    if not user_input.isdigit():
        print("The input should have only numbers.")
        return

    int_number = int(user_input)
    print(int_number)

convert_to_integer()
```
Notice that with this solution we are not accepting float numbers to parse them to int. Let's see another solution that includes them.

## Parse to float before parsing to int

The `float()` function returns a floating-point representation of a float. This way, when the user enters `17.2` it first will be converted into a float number and then parsed to int without any problems.

```python
def convert_to_integer():
    user_input = input("Enter a number: ")

    int_number = int(float(user_input))
    print(int_number)

convert_to_integer()
```

This time, when the user enters `17.2` the output will be `17` as expected.

## Exception handling

A third approach is to handle the exception with a `try` / `except` clause that calls the `ValueError`.

```python
def convert_to_integer():
    user_input = input("Enter a number: ")
    try:
        int_number = int(user_input)
        print(int_number)
    except ValueError:
        print("That value cannot be parsed to int. Please try with another one.")

convert_to_integer()
```
Here, we first have the program attempt our original workflow, but use the except clause to handle the `ValueError` that we have anticipated.

```python
Enter a number: hello
That value cannot be parsed to int. Please try with another one.
```
In this example, we have told the user that they cannot parse "hello" to an integer number.

## Learn more

Search across open source Python repositories that have the `ValueError: invalid literal for int() with base 10` to understand the message more.

<SourcegraphSearch query="ValueError: invalid literal for int() with base 10 lang:python" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).