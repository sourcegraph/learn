---
title: Getting started with type hinting in Python
author: caleb-hock
tags: [python, types, tutorial]
publicationDate: September 28. 2021
description: Type hinting in Python helps others understand and read your code
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-09.png
imageAlt: Sourcegraph Learn
browserTitle: Type hints in Python programming
type: posts
---

Type hinting is the process of annotating your code so that other developers reading your code will understand the type of an object declared. Type hinting was officially added with the release of Python 3.5. Currently, Python does not enforce type hinting when writing programs, but it is still a good practice to make your code more readable.

In this tutorial, we’ll go through a type hinting example with guidance on how to catch type hinting errors. Then, we’ll demonstrate how to use type hinting when initializing variables, how to use type hinting with user-generated values, and then how to use multiple or optional types. 

## A type hinting example function

First, let's start with this function. This math function is designed to take in two integers and return the sum.

```python
def sum_two_numbers(num1: int = 0, num2: int = 0) -> int:
    sum: int = num1 + num2
    return sum
```

In this example, both values passed into our `sum_two_numbers()` function — the sum object and return value — are all designated as integers, as indicated with `int` in each case. Default values come after the type hint for function parameters.

## Catching type hinting errors

Because the Python interpreter does not enforce type hinting, unexpected types can be passed to functions.

Let’s consider what happens when two strings get passed into the `sum_two_numbers()` function.

```python
def sum_two_numbers(num1: int, num2: int) -> int:
    sum: int = num1 + num2
    return sum

sum_two_numbers("Hello ", "World!")
```

Using the function like this would not throw an error. Instead, since the addition operator is valid for the string type, it will concatenate the two strings passed to it. Using the `sum_two_numbers()` function like this will return the string `Hello World!`.

If you would like to type check your code, you can use an external tool to do so, like [Mypy](http://mypy-lang.org/). You can use pip to install Mypy within your Python 3 programming environment (or alternately use the `pip3` command). 

```sh
pip install mypy
```

Let the previously written code be in a file called `sum.py`. You can run Mypy on the file by typing the following command.

```sh
mypy sum.py
```

Running Mypy on the code will return the following errors.

```
sum.py:4: error: Argument 1 to "sum_two_numbers" has incompatible type "str"; expected "int"
sum.py:4: error: Argument 2 to "sum_two_numbers" has incompatible type "str"; expected "int"
Found 2 errors in 1 file (checked 1 source file)
```

Code written with type hinting issues will not return any errors. If we put the first version of the `sum_two_numbers()` function that used integer types, we would instead receive the following output from Mypy.

```
Success: no issues found in 1 source file
```

Running Mypy on Python files will help you discover type checking errors.


## Initializing variables with type hinting

Python’s primitive types are included with general type hinting.

```python
my_int: int = 9
my_float: float = 2.2
my_string: str = "Hello World!"
my_boolean: bool = False
```

Each of these variables are initialized with type hinting as part of their declaration above.

## Collection types

Depending on the version of Python you are using, you may be able to leverage built-in typing across data structures, or you may need to import a module. In this section, we’ll go through how to hint type collection types in the two most recent versions of Python. 

### Python 3.9

In Python 3.9, built-in collection types are included as generic types and their respective type hints can be used similarly to the primitive Python types. Here is how you would type hint a list object in Python 3.9.

<Highlighter
    language='python'
    input='my_list: list[int] = [1, 2, 3, 4, 5]'
    matcher='[1, 2, 3, 4, 5]'
/>

This list is initialized with the integer type by using the `list[int]` syntax.

Below is an example of a tuple that we have type hinted as being composed of an integer, float, and string.

<Highlighter
    language='python'
    input='my_tuple: tuple[int, float, str] = (1, 9.5, "Red")'
    matcher='int'
/>

For a tuple object of unknown size, ellipses are used to describe the type of objects stored within it. Here is a tuple with an unknown number of integers stored.

```python
my_big_tuple: tuple[int, ...] = (1, 2, 3) 
```

It is possible to stack multiple types together as well. Here is a tuple that has sets of two integers.

```python
my_set: set[tuple[int, int]] = {(1, 2), (2, 3), (3, 4)}
```

Because we are working in Python 3.9 in these examples, we can set up these data structures as we did with other data types above, using the built-in functionality.

### Python 3.8

In Python 3.8, built-in collection type hints are not built directly into Python and must be imported to use. These types can be imported using the typing module. Using that module, below is how you would type hint a list object in Python 3.8. Note the use of title case in `List[int]`. 

```python
from typing import List

my_list: List[int] = [1, 2, 3, 4, 5]
```

Some other types in Python 3.8 that need to leverage the typing library include set, dictionary (`dict`), and tuple. Since both dictionary and tuple types can have multiple types involved, you must specify each type. Here is an example of a tuple that has an integer, float, and string.

```python
from typing import Tuple

my_tuple: Tuple[int, float, str] = (1, 9.5, "Red")
```
For a tuple object of unknown size, ellipses are used to describe the type of objects stored within it. Here is a tuple with an unknown number of integers stored.

```python
from typing import Tuple              

my_big_tuple: Tuple[int, ...] = (1, 2, 3)
```

You can also stack multiple types together as well, as in this tuple that uses two integers.

```python
from typing import Set, Tuple                           

my_set: Set[Tuple[int, int]] = {(1, 2), (2, 3), (3, 4)}
```

When working with Python 3.8, be sure to import the typing module prior to type hinting on data collections. Python 3.9 is backwards compatible, and will run the code above. 
## User-created types
It is also valid to type hint user-defined classes. In terms of type hinting, user-defined classes work in the same way as the primitive Python types. For example, here is a coordinate class definition and implementation.

```python
class Coordinate:
    x: int
    y: int

    def __init__(self, x_: int, y_: int) -> None:
        self.x = x_
        self.y = y_

c1: Coordinate = Coordinate(1, 2)
```

In the above example, the user-defined classes use type hinting. To learn more about the `-> None` annotation with `__init__`, review [PEP 484 - Type Hints](https://www.python.org/dev/peps/pep-0484/). 
## Multiple and optional types
As may happen with an application that takes user input, sometimes you may prefer for an object to be one of many types. This is possible using a union. 

Below is an example of how you would make the `sum_two_numbers()` function support both integers and floats.

```python
from typing import Union

def sum_two(num1: Union[int, float], num2: Union[int, float]) -> Union[int, float]:
    sum: Union[int, float] = num1 + num2
    return sum
```

In the example above, `num1` and `num2` can be either an integer or float type. 

If it is unclear what type an object is going to be, you can use the `Any` keyword to describe it.

```python
from typing import Any

my_variable: Any
```

In the above example, `my_variable` can be any type.

Some objects may have a value of `None`. To allow this, type hint using the `Optional` keyword to specify that a variable may have a defined value or be None.

```python
from typing include Optional

my_string: Optional[str] = None
```

This code will create a string object with the value of `None`.

## Additional resources

Read more about Python type hints in [PEP 484](https://www.python.org/dev/peps/pep-0484/) from the official Python documentation. 

Search open source code for type hinting in Python with Sourcegraph to learn how others are using this in their code. Here are a few queries to get you started.

<SourcegraphSearch query="-> None lang:python" patternType="literal"/>

<SourcegraphSearch query="List[int] = lang:python" patternType="literal"/>

Check out our other tutorials on [Sourcegraph Learn](https://learn.sourcegraph.com).
