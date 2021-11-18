---
title: How to troubleshoot Linux error Not a directory
authorSlug: dean-coakley
authorDisplayName: Dean Coakley
tags: [tutorial, Linux, troubleshooting]
publicationDate: October 11, 2021
description: Learn how to error handle Not a directory in Linux
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: Not a directory in Linux error handling
type: posts
---

The Linux commands `cd` or `rmdir` will return the error `Not a directory` if you run them referencing a file that is not a directory (or folder). This can include a text file or a binary.

## Reproducing the error

Lets create a text file.

<PrismSyntaxHighlighter
input='echo "test" > test'
language='bash'
/>

Let's try to change directory to the text file named `test` with the **c**hange **d**irectory (`cd`) command.

<PrismSyntaxHighlighter
input='cd test'
language='bash'
/>

We'll receive the following error message.

<OutputHighlighter
input='cd: not a directory: test'
/>

The `cd` command fails because you've tried to change directory but passed a text file as an argument instead of a directory.

Now that we've reproduced the error, let's go over some possible solutions.

## Move the text file into a directory

The most straightforward way of avoiding this error is by using `cd` only on known directories.

First, we create a directory.

<PrismSyntaxHighlighter
input='mkdir mydir'
language='bash'
/>

Then we can move our text file, `test` into that directory.

<PrismSyntaxHighlighter
input='mv test mydir/test'
language='bash'
/>

Finally we can now change directory into `mydir`.

<PrismSyntaxHighlighter
input='cd mydir'
language='bash'
/>

You can ensure that the file is in `mydir` by running the `ls` — or _list_ — command.

## Use `ls` to check if the file is a directory first

You can use `ls` to list all files in a directory. We will append the flags `-lah`:

* `-l` — list files verbosely in long-form, showing more detail
* `-a` — list all files, not ignoring files that begin with `.`
* `-h` — list file sizes in a human-readable format, as in `5K`, `250M`, `96B`


<PrismSyntaxHighlighter
input='ls -lah'
language='bash'
/>

Once you run the command, you should receive output similar to the following based on your own file structure. 

<OutputHighlighter
input='total 1848
-rw-r--r--    1 user  Users   156B 11 Oct 12:17 .babelrc
-rw-r--r--    1 user  Users    72B 11 Oct 12:24 .env
-rw-r--r--    1 user  Users   204B 11 Oct 20:12 .eslintrc.js
-rw-r--r--    1 user  Users   390B 11 Oct 12:17 .eslintrc.json
drwxr-xr-x   14 user  Users   448B 11 Oct 20:25 .git
drwxr-xr-x    3 user  Users    96B 11 Oct 12:17 .githooks
drwxr-xr-x    4 user  Users   128B 11 Oct 12:17 .github
...'
/>

The start of each output lets you know if it's a directory or not. `-` means it's a regular file (as in `-rw-r--r--`) and `d` means it is a directory (as in `drwxr-xr-x`). Be sure to use `cd` only on directories that are indicated as such. 

## Use `grep` to filter only directories

You can use the `grep` command to list only directories. This way if you use `cd` on any of those, it should succeed. `grep` is used to filter out all regular files so only directories remain in the list.

<PrismSyntaxHighlighter
input='ls -lAh | grep "^d"'
language='bash'
/>

After running this comand, you'll only receive the output of directories in the example of the section above. 

<OutputHighlighter
input='drwxr-xr-x   14 user  Users   448B 11 Oct 20:25 .git
drwxr-xr-x    3 user  Users    96B 11 Oct 12:17 .githooks
drwxr-xr-x    4 user  Users   128B 11 Oct 12:17 .github
...'
/>

With `grep` you can filter out the files and directories you are looking for to ensure you are not using a command that will not run on a given type. 


## Learn more

Search across open source Linux repositories that have the `Not a directory` to understand the message more.

<SourcegraphSearch query="Not a directory" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Linux](https://learn.sourcegraph.com/tags/linux).
