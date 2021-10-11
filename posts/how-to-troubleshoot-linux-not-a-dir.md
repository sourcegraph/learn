---
title: How to troubleshoot Linux error Not a directory
author: dean-coakley
tags: [tutorial, Linux, troubleshooting]
publicationDate: October 11, 2021
description: Learn how to error handle Not a directory in Linux
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: Not a directory in Linux error handling
type: posts
---

Introduction with the error message

## Reproducing the error

Lets create a text file:
```bash
$ echo "test" > test
```

Lets try to change directory to the text file named `test`.
```bash
$ cd test
cd: not a directory: test
```

`cd` fails because you've tried to change directory, but a text file was provided instead of a directory.

Now that we've reproduced the error, lets go over some possible solutions.

## Put text file in a directory

The simplest way of avoiding the error is not using `cd` on a regular file.

First we make a directory.

```bash
$ mkdir mydir
```

Then we move our text file into the dir.

```bash
$ mv test mydir/test
```

Finally we can now change directory into `mydir`.

```bash
$ cd mydir
```

## Use ls to only list directories first

You can use ls to list all files in your current directory
```bash
$ ls -lAh
total 1848
-rw-r--r--    1 user  Users   156B 11 Oct 12:17 .babelrc
-rw-r--r--    1 user  Users    72B 11 Oct 12:24 .env
-rw-r--r--    1 user  Users   204B 11 Oct 20:12 .eslintrc.js
-rw-r--r--    1 user  Users   390B 11 Oct 12:17 .eslintrc.json
drwxr-xr-x   14 user  Users   448B 11 Oct 20:25 .git
drwxr-xr-x    3 user  Users    96B 11 Oct 12:17 .githooks
drwxr-xr-x    4 user  Users   128B 11 Oct 12:17 .github
...
```

The start of each output lets you know if it's a directory or not. `-` means it's a regular file and `d` means it is a directory.

You can use grep to list only directories. This way if you use `cd` on any of those, it should succeed. `grep` is used to filter out all regular files so only directories remain in the list.

```bash
$ ls -lAh | grep "^d"
drwxr-xr-x   14 user  Users   448B 11 Oct 20:25 .git
drwxr-xr-x    3 user  Users    96B 11 Oct 12:17 .githooks
drwxr-xr-x    4 user  Users   128B 11 Oct 12:17 .github
...
```

## Learn more

Search across open source JavaScript repositories that have the `Not a directory` to understand the message more.

<SourcegraphSearch query="Not a directory" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Linux](https://learn.sourcegraph.com/tags/linux).
