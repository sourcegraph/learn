---
title: "How to troubleshoot Python ValueError: invalid literal for int() with base 10"
authorSlug: angelina-tresca
authorDisplayName: Angelina Tresca
tags: [tutorial, Python, troubleshooting]
publicationDate: November 29, 2021
description: "Learn how to error handle Python ValueError: invalid literal for int() with base 10"
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: "ValueError: invalid literal for int() with base 10 in Python error handling"
type: posts
---

If you are working in Python and receive the following output, your code is trying to convert a string value into an integer when that string value is not formatted as an integer.

<Highlighter
input='ValueError: invalid literal for int() with base 10'
/>

In this tutorial, we'll reproduce the issue and then go over some solutions.

## Reproducing the error

Let's write the following program, `integer.py`.

<PrismSyntaxHighlighter
input={`def convert_to_integer():
    user_input = input("Enter a number: ")
    int_number = int(user_input)
    print(int_number)
 
convert_to_integer()
 `}
language='python'
/>                       
                        
This small program creates a function that receives a string from the user input and parses it as an integer.

If the user enters `17` there will be no errors returned as indicated in the output below.

<Highlighter
input={`Enter a number: 17
17`}
matcher='17'           
/>

If, however, the user enters `17.2` we will be able to reproduce the `ValueError` because that number is not an integer so it can't be parsed by this program.

<Highlighter
input={`Enter a number: 17.2
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 3, in convert_to_integer
ValueError: invalid literal for int() with base 10: '17.2'`}
matcher='17.2'           
/>

The same happens if the user enters a string that is not representing a number.

<Highlighter
input={`Enter a number: hello
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 3, in convert_to_integer
ValueError: invalid literal for int() with base 10: 'hello'`}
matcher='hello'           
/>

Now that we have been able to reproduce the error, let's go over possible solutions.

## Check the user input

You can check that the user input only has numbers before parsing that input into an integer. Python strings have the built-in `isdigit()` function that indicates whether all characters in a string (regardless of length) are digits.

<PrismSyntaxHighlighter
input={`def convert_to_integer():
    user_input = input("Enter a number: ")
 
    # If the user input has any characters that are not numbers, shows a message and exits the function
    if not user_input.isdigit():
        print("Input characters should only be numbers.")
        return
 
    int_number = int(user_input)
    print(int_number)
 
convert_to_integer()
 `}
language='python'
/>     
    
Notice that with this solution we are not accepting float numbers to parse them to integers. Let's see another solution that includes them.

## Parse to float before parsing to an integer

The `float()` function returns a floating-point representation of a float. This way, when the user enters `17.2` it first will be converted into a float number and then parsed to an integer without any problems.

<PrismSyntaxHighlighter
input={`def convert_to_integer():
    user_input = input("Enter a number: ")
 
    int_number = int(float(user_input))
    print(int_number)
 
convert_to_integer()
 `}
language='python'
/>

This time, when the user enters `17.2` the output will be `17` as expected.

## Exception handling

A third approach is to handle the exception with a `try`-`except` clause that calls the `ValueError`.

<PrismSyntaxHighlighter
input={`def convert_to_integer():
    user_input = input("Enter a number: ")
    try:
        int_number = int(user_input)
        print(int_number)
    except ValueError:
        print("That value cannot be parsed to int. Please try with another one.")
 
convert_to_integer()
 `}
language='python'
/>

Here, we first have the program attempt our original workflow, but use the `except` clause to handle the `ValueError` that we have anticipated.

<Highlighter
input={`
Enter a number: hello
That value cannot be parsed to int. Please try with another one.`}
matcher='hello'           
/>
    
In this example, we have told the user that the program cannot parse "hello" to an integer number.

## Learn more

Search across open source Python repositories that have the `ValueError: invalid literal for int() with base 10` to understand the message more, and to learn how others are handling this error.

<SourcegraphSearch query="ValueError: invalid literal for int() with base 10 lang:python" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).
