---
title: How to troubleshoot JavaScript TypeError invalid assignment to const "x"
author: Shubham Bhatt
tags: [tutorial, JavaScript, troubleshooting]
publicationDate: 19/10/2021
description: Learn how to error handle JavaScript TypeError invalid assignment to const "x"
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: TypeError invalid assignment to const "x" in JavaScript error handling
type: posts
---

Introduction with the error message

## Reproducing the error

const x = 80;

// ...

x = 120; // TypeError: invalid assignment to const `x'

## Solution 1

Rename the variable name

const x = 80;
const y = 120;

## Solution 2

use let or var instead of const

let x = 80;

// ...

let x = 120;

## (optional) Solution 3

scoping

const x = 80;

function setupBigScreenEnvironment() {
  const x = 120;
}

## Learn more

Search across open source JavaScript repositories that have the `TypeError` to understand the message more.

<SourcegraphSearch query="TypeError: invalid assignment to const "x"" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).
