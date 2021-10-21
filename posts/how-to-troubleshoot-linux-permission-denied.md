---
title: How to troubleshoot the Linux Permission denied error
author: Jack Newman
tags: [tutorial, Linux, troubleshooting]
publicationDate: October 21, 2021
description: Learn how to handle Permission denied error in Linux
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: Permission denied in Linux error handling
type: posts
---

If you are working on a Linux terminal and you receive the following output, 
you were probably dealing with a file whose permissions have been configured 
incorrectly

```sh
<filename>: Permission denied
```

In this tutorial, you'll learn how to reproduce this error, what's causing it,
and how you can fix it - forever!

Before we get started, you need to be completely sure that the file you're 
trying to access **is not important** - please don't modify permissions for 
system files, unless you know what you're doing

## Reproducing the error

This bit is pretty simple - we'll be using the `chmod` command to modify 
permissions of a temporary file to cause the Permission Denied error, and 
then rectify the error explaining each step of the process

Start by creating a temporary file to play around with - fill it with random
data while we're at it! Here's what I've done on my end;

```sh
echo "Hello World" > test-file.txt
```

This will create a file named `test-file.txt` in the working directory, and 
fill the file with the text "Hello World" - you can skip the command and
follow along by manually creating the file if you wish to!

Check the default permissions for this temporary file using

```sh
ls -l
```

On my end, this results in

```sh
-rw-r--r--  1 jack jack    12 Oct 21 23:10 test-file.txt
```

We're interested in the first column of this output - the text `rw-r--r--`
represents the permissions of this newly created file. Let's break this down 
into three parts (you'll see why three parts in some time)

 - `rw-`
 - `r--`
 - `r--`

These strings can consist of three characters at most - `r`, `w`, and `x` - each
of them representing a permission type.
 
 - `r` implies *read* - i.e. users can read the file
 - `w` implies *write* - users can write to the file
 - `x` implies *execute* - users can execute the file. Not every file needs the 
 execute permission

Before moving on, a *user* here refers to a `user type` in Linux - it can be an
individual user or a group of users. 

There are three permission groups (this is why we divided the permissions into 
three sections - each section represents a permission group);

 - Owner: The one who created the file or directory
 - Groups: Anyone who is in the same group as the owner
 - Others: Any user that isn't a part of the previous categories ends up here

The file permissions above relate to each of these groups in the same order,
for example - the `rw-` permission above meant that the owner of the file 
(that being me), can read and write to the file. While the other two groups can
just read the file!

Coming back on to the issue, to reproduce the Permission Denied error, we'll
modify the temporary file we created (`test-file.txt` in my case) - and remove
the *read* permission for the same

To do this, simply use the command

```sh
chmod -r <filename>
```

For me, that would be

```sh
chmod -r test-file.txt
```

And that would be it! To view the updated file permissions, use the `ls -l`
command as before. For me, this results in

```sh
--w-------  1 jack jack    12 Oct 21 23:10 test-file.txt
```

Notice that the file permissions for the owner (and other groups) have been 
modified. The missing `r` permission for all groups implies that no one can
read the file anymore - and just the owner can write to the file.

To verify this, try using the `cat` command!

```sh
cat test-file.txt

> cat: test-file.txt: Permission denied
```

The `cat` command will simply dump the contents of a file on the terminal. Since
no one can read the file anymore, the command fails with an error. You can 
try opening the file with a text editor or any other application - and will
still arrive at the same result :)

## Solution: Modifying file permissions

The easiest (and obvious) solution would be to simply assign the required 
permissions to the file - and this is exactly what you need to do for most 
cases!

Following the previous example - to read the file normally, we simply need
to assign the read permission back to the file! Again, using the `chmod` 
command, this becomes

```sh
chmod +r test-file.txt
```

Note that `test-file.txt` is the name of the temporary file I created to 
reproduce the error.

To verify that the file has read permissions, we use `ls -l`. This should 
display the output

```sh
-rw-r--r--  1 jack jack    12 Oct 21 23:10 test-file.txt
```

Notice the added `r` permission for every group - this implies everyone
can read the file - same as before!

To test this out, simply use the `cat` command

```sh
cat test-file.txt 

> Hello World
```

This verifies that the file can be read normally, like before!

In your case, you would most likely be needing to use the `chmod` command to
add the executable permission to files - this can be done using 
`chmod +x <filename>`

Please be sure that you trust the file before adding the executable permission
to it - there is a reason why files aren't executable by default!

## Solution: Using `sudo`

Like with everything in Linux - using the magic word `sudo` will allow you to
do anything - including using files even if you don't have the permission to!

**Sidenote:** As a general warning, make sure that you really, really trust a 
file before using `sudo` with it!

We'll be continuing with the original example - I have a file `test-file.txt` - 
with the permissions

```sh
--w-------  1 jack jack    12 Oct 21 23:10 test-file.txt
```

Notice that no user has the *read* permission on this file. We can verify this
using `cat`

```sh
cat test-file.txt

> cat: test-file.txt: Permission denied
```

As expected, no one - including us, can read the file.

But, using `sudo`, we can simply ignore this restriction!

```sh
sudo cat test-file.txt

> Hello World
```

Even though no one can read the file, using `sudo`, we can read the file 
directly without having to modify the file permissions. The same goes for
being able to write-to, or execute a file directly without needing the 
appropriate permissions!

## Learn more

Search across open source repositories that have the `Permission denied` to understand the message more.

<SourcegraphSearch query="Permission denied" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Linux](https://learn.sourcegraph.com/tags/linux).