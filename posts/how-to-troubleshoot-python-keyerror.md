---
title: How to troubleshoot Python KeyError
authorSlug: yashesvinee-v
authorDisplayName: Yashesvinee V
tags: [tutorial, Python, troubleshooting]
publicationDate: November 29, 2021
description: Learn how to error handle Python KeyError
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header-8.png
imageAlt: Sourcegraph Learn
browserTitle: KeyError in Python error handling
type: posts
---

Dictionaries are a commonly used collection data type in Python. We can encounter a Python `KeyError` when we try to access a key that isn't present in a given dictionary. The `LookUpError` exception is raised when something cannot be found or if the key used on mapping is invalid. So, we can say that a `KeyError` is a type of `LookUpError` exception.

Now, let us review a few situations that cause this error.

## Reproducing the error

The code shown below initializes a dictionary with some keys and their corresponding values, which in our case is fruits and vegetables, each with their relevant color. 

<PrismSyntaxHighlighter
input={`my_list= {'Apple': 'Red', 'Lemon': 'Yellow', 'Carrot': 'Orange', 'Broccoli': 'Green', 'Grapes': 'Purple'}
user_item = 'Banana'
  
print(user_item + ' is ' + my_list[user_item] + ' in color')`}
language='python'
/>

On running the above code snippet we get the following output:

<Highlighter
input={`Traceback (most recent call last):
  File "main.py", line 4, in <module>
    print(user_item + ' is ' + my_list[user_item] + ' in color')
KeyError: 'Banana'`}
/>

The attempt to access 'Banana' results in a `KeyError` exception as it does not exist in the dictionary.

Let's go through a few ways to tackle this error.

## Using the `get()` method

In dictionaries, the `get()` method is used to either return the value of a specific key or a default value when the key is not found. Implementing this to the code mentioned before, we get:

<PrismSyntaxHighlighter
input={`my_list= {'Apple': 'Red', 'Lemon': 'Yellow', 'Carrot': 'Orange', 'Broccoli': 'Green', 'Grapes': 'Purple'}
user_item = input('Enter a fruit or vegetable: ')
result = my_list.get(user_item)
 
if result:
    print(user_item + ' is ' + my_list[user_item] + ' in color')
else:
    print('Color of ' + user_item + ' is unknown')`}
language='python'
/>

Upon running the above program, the user will be prompted to enter a fruit or vegetable. If they provide input as `Banana`, the full output will be as follows.

On providing the input as `Banana` and running the code, we get the output as 

<Highlighter
input={`Enter a fruit or vegetable: Banana
Color of Banana is unknown'`}
matcher='Banana'
/>

In this way, you have handled the error so that the user is provided a more human-readable message.

## Using the `setdefault()` method

The `setdefault()` method is used to introduce a new key with a default value into a dictionary. 

For example, we can initialize a default that takes in the `user_item` and sets the color value as `Unknown`.

<PrismSyntaxHighlighter
input={`my_list= {'Apple': 'Red', 'Lemon': 'Yellow', 'Carrot': 'Orange', 'Broccoli': 'Green', 'Grapes': 'Purple'}
user_item = input('Enter a fruit or vegetable: ')
my_list.setdefault(user_item, 'Unknown')
 
print(user_item + ' : ' + my_list[user_item])`}
language='python'
/>

On giving the input as `Banana`, we would receive the following output.

<Highlighter
    input='Banana: Unknown'
/>

Thus, by using the setdefault() method we can prevent KeyError as now the MyList dictionary would have an additional key called 'Banana' with a default value as 'Unknown'. This value will not change unless specified.

## Use `try`-`except` block

Another way of avoiding `KeyError` is by using the `try`-`except` block, which is used to resolve many errors when writing code.

<PrismSyntaxHighlighter
input={`my_list= {'Apple': 'Red', 'Lemon': 'Yellow', 'Carrot': 'Orange', 'Broccoli': 'Green', 'Grapes': 'Purple'}
user_item = input('Enter a fruit or vegetable: ')
 
try:
    print(user_item + ' is ' + my_list[user_item]+ ' in color')
except:
    print(user_item + ' was not found in our data,')`}
language='python'
/>

When input is given as `Banana`, we now get the output as

<Highlighter
    input='Banana was not found in our data.'
/>

Using the `try`-`except` logic enables the program to attempt to catch the error and provide an exception. Here, we have written a more user-friendly response that explains that `Banana` was not loaded as data into our program.

From here, you may want to cycle through the program again so that the user can attempt to access the color of another fruit or vegetable. Beyond this, you may want to construct the program so that the user can add another key-value pair so that `Banana` will exist in the dictionary going forward. 

## Learn more

Search across open source Python repositories that have the `KeyError` to understand how other developers are handling this exception.

<SourcegraphSearch query="KeyError lang:python" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).
