---
title: How to troubleshoot PHP syntax error unexpected end of file, expecting ';' or ','
author: tom-benevides
tags: [tutorial, php, troubleshooting]
publicationDate: October 15, 2021
description: Learn how to error handle PHP syntax error, unexpected end of file, expecting ';' or ','
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: Syntax error, unexpected end of file, expecting ';' or ',' in PHP error handling
type: posts
---

When you are working with PHP, you may receive this message:

```
unexpected end of file, expecting ';' or ','
```

This means that you haven't finished your command or haven't written it completely. Programming languages ​​like PHP use a specific character to define the end of a command (";"), so they can understand what to run at what time. When you don't enter these character, the PHP interpreter thinks it's an unfinished command and throws an error.

## Reproducing the error

Let's see this in practice. Assuming that you have PHP installed on your machine, write this little piece of code in a `hello.php` file:

```php
<?php

echo 'Hello World'

>
```
Now, you just need to run the file on terminal (in the same path of the file) and you'll see the error on output:

```shell
php hello.php

PHP Parse error:  syntax error, unexpected end of file, expecting "," or ";" in /path/to/hello.php on line 4
```

Now that we reproduced the error, let's find out how to fix it.

## Finish the command with ";"

As we saw before, PHP language use some characters to define the end of a command or a concatenation of commands. So, in our hello.php, add it at the end of the `echo` command:

```php
<?php

echo 'Hello World';

>
```

So, now the output of this file is just `Hello World`. 

## When with ","? 

You may noticed that the error message suggests the characters that been missing in the code: `syntax error, unexpected end of file, expecting "," or ";"`. So, if put a ";" at the end of the `echo` works, what happens when we put a ","? If you do this experiment, you'll see something like this:

```php
<?php

echo 'Hello World',

>
```

```shell
php hello.php

PHP Parse error:  syntax error, unexpected end of file in /path/to/hello.php on line 4
```

This is weird. It didn't work at all, but why? Because in PHP, the "," character is used to concatenate expressions in the `echo` command. That's why the first error suggests ";" or "," because the interpreter doesn't know if you intended to write that code or concatenate it with more expressions

So, let's see a code that uses both character ("," and ";"):

```php
<?php

$name = 'Sourcegraph.';

echo 'Hello World ', $name;

>
```

The output of the file execution:

```shell
php hello.php

Hello World Sourcegraph.
```

## Learn more

Search across open source PHP repositories that have this `SyntaxError` to understand the message more.

<SourcegraphSearch query="unexpected end of file, expecting ';' or ','" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [PHP](https://learn.sourcegraph.com/tags/php).