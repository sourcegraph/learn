---
title: How to troubleshoot Python KeyError
author: Yashesvinee
tags: [tutorial, Python, troubleshooting]
publicationDate: October 28, 2021
description: Learn how to error handle Python KeyError
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: KeyError in Python error handling
type: posts
---

Dictionaries are a commonly used collection data type in Python. We encounter KeyErrors when we try to access a key that is'nt present in the Dictionary. LookUpError exception is raised when something cannot be found or if the key used on a mapping is invalid. So, we can say that KeyErrors are a type of LookUpError Exception.

Now, let us see a few situations that cause this error.

## Reproducing the error
The code shown below initializes a dictionary with some keys and their corresponding values, which in our case is fruits and vegetables with their color. 

```python
MyList= {'Apple': 'Red', 'Lemon': 'Yellow', 'Carrot': 'Orange', 'Broccoli': 'Green', 'Grapes': 'Purple'}
item = 'Banana'
print(item +' is ' + MyList[item]+ ' in color')
```
On compiling the above code snippet we get the following output:
```
Traceback (most recent call last):
  File "main.py", line 3, in <module>
    print("Color: " + MyList[item])
KeyError: 'Banana'
```
The attempt to access 'Banana' results in a KeyError exception as it does not exist in the dictionary.

Let's see a few ways to tackle this error.

## Using the get() method

In dictionaries, the get() method is used to either return the value of a specific key or a defalut value when the key is not found. Implementing this to the code mentioned before, we get:

```python
MyList= {'Apple': 'Red', 'Lemon': 'Yellow', 'Carrot': 'Orange', 'Broccoli': 'Green', 'Grapes': 'Purple'}
item = input()
result = MyList.get(item)

if result:
   print(item +' is ' + MyList[item]+ ' in color')
else:
   print('Color of ' +item+ ' is unknown')
```
On providing the input as ```Banana``` and running the code, we get the output as 

``` Color of Banana is unknown```


## Using the setdefault() method

The setdefault() method is used to introduce a new key with a default value into a dictionary. For Example:

``` python
MyList= {'Apple': 'Red', 'Lemon': 'Yellow', 'Carrot': 'Orange', 'Broccoli': 'Green', 'Grapes': 'Purple'}
item = input()
MyList.setdefault(item,'Unknown')

print(item+ ': ' +MyList[item])
```
On giving the input as ```Banana```, we would receive the following output 

```Banana: Unknown```

Thus, by using the setdefault() method we can prevent KeyError as now the MyList dictionary would have an additional key called 'Banana' with a default value as 'Unknown'. This value will not change unless specified.

## Use try-except block

Another way of avoiding KeyError is by using the try-except block which used to resolve most of the errors when writing code.

```python
MyList= {'Apple': 'Red', 'Lemon': 'Yellow', 'Carrot': 'Orange', 'Broccoli': 'Green', 'Grapes': 'Purple'}
item = input()

try:
  print(item +' is ' + MyList[item]+ ' in color')
except:
  print('Key not found')
```
When input is given as ```Banana``` and compiled we get the output as

```Key not found```

## Learn more

Search across open source Python repositories that have the `KeyError` to understand the message more.

<SourcegraphSearch query="KeyError lang:python" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Python](https://learn.sourcegraph.com/tags/python).
