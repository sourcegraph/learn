---
title: How to troubleshoot PHP syntax error unexpected end of file, expecting ';' or ','
author: mujhtech
tags: [tutorial, php, troubleshooting]
publicationDate: October 18, 2021
description: Learn how to error handle PHP syntax error, unexpected end of file, expecting ';' or ','
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: Syntax error, unexpected end of file, expecting ';' or ',' in PHP error handling
type: posts
---

A quick guide on how to find the cause of php error parse error. Unexpected end of file errors can occur when a file doesn't have the proper closing tags.

```php
syntax error, unexpected end of file, expecting ';' or ','
```

## Reproducing the error

The following code produced the above error:

```php
<?php
if (true) {
    echo "asdf";
?>
```
Notice the missing curly brace. This missing curly brace can cause such syntax error.

Now that we have been able to reproduce the error, let's go over possible solutions.

## Solution 1

If you get an error like this (depending on PHP version), you will need to make sure that you've matched up all inverted commas, all parentheses, all curly braces, all brackets, etc.

## Solution 2

Find your php.ini file, then open it with your favorite editor and search for ```; short_open_tag = Off ;``` and replace it with ```short_open_tag = On ;```.


## Learn more

Search across open source PHP repositories that have this `SyntaxError` to understand the message more.

<SourcegraphSearch query="unexpected end of file, expecting ';' or ','" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [PHP](https://learn.sourcegraph.com/tags/php).
