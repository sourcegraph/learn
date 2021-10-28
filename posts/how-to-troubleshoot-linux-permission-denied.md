---
title: How to troubleshoot the Linux Permission denied error
author: jack-newman
tags: [tutorial, Linux, troubleshooting]
publicationDate: October 23, 2021
description: Learn how to handle Permission denied error in Linux
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: Permission denied in Linux error handling
type: posts
---

If you are working on a Linux terminal and you receive the following output, you are probably trying to work with a file where the permissions have not been properly configured.

<Highlighter
input='<filename>: Permission denied'
language='bash'
/>

In this tutorial, we'll reproduce this error, go over what's causing it, and provide solutions for how you can fix it.

Before we get started, it's important to understand that **making permission modifications can be permanent** and you should always exercise caution.

We'll be demonstrating permissions with an unimportant test file, and you should only work with files that you know are backed up and _are not system files_. **Do not modify permissions for files you are not sure about, especially system files that are required for your computer to run.**

With that word of caution, let's get started. 

## Reproducing the error

We'll be using the `chmod` command to modify permissions of a temporary file to cause the `Permission denied` error, and then rectify the error explaining each step of the process.

Start by creating a temporary file to test with; we'll fill it with random data/

<Highlighter
input='echo "Hello World" > test-file.txt'
language='bash'
/>

This will create a file named `test-file.txt` in the working directory, and fill the file with the text "Hello World."

Check the default permissions for this temporary file using

<Highlighter
input='ls -l'
language='bash'
/>

Depending on what else is in your working directory, you may have several lines of output, but you should be able to identify the file we just created, and review output for that line that is similar to the following.

<Highlighter
input='-rw-r--r--  1 your-user your-user    12 Oct 21 23:10 test-file.txt'
language='bash'
matcher='your-user your-user'
/>

We're interested in the first column of this output — the text `rw-r--r--` — which represents the permissions of this newly created file. Let's break this down into three parts.

 - `rw-`
 - `r--`
 - `r--`

These strings can consist of three letters at most — `r`, `w`, and `x` — each of them representing a permission type. These correspond to the three spaces allotted (including the hyphens), where `rw-` means read and write but not execute. 
 
 - `r` indicates *read*; users can read the file.
 - `w` indicates *write*; users can write to the file.
 - `x` indicates *execute*; users can execute the file. Not every file needs the execute permission.

Before moving on, a *user* here refers to a `user type` in Linux — it can be an individual user or a group of users. 

There are three permission groups. We divided the permissions into three sections because of this: each section represents a permission group.

| User   | Description |
|--------|-------------|
| Owner  | The one who created the file or directory |
| Groups | Anyone who is in the same group as the owner |
| Others | Any user that isn't a part of the previous categories ends up here |

The file permissions above relate to each of these groups in the same order. For example, the `rw-` permission above means that the owner of the file (`your-user`), can read and write to the file, while the other two groups only have access to read the file as they have the `r--` permission. 

With that background in mind, to reproduce the `Permission denied` error, we'll modify the temporary file we created —`test-file.txt` — and remove
the *read* permission.

To do this, we'll use the following command which uses `chmod` (change mode) to update user permissions and removes read access with `-r`. We'll pass the filename to the command.

<Highlighter
input='chmod -r test-file.txt'
language='bash'
/>

Now, review the updated file permissions, using the `ls -l` command as before. You will receive output next to that file that is similar to the following. 

<Highlighter
input='--w-------  1 your-user your-user    12 Oct 21 23:10 test-file.txt'
language='bash'
matcher='your-user your-user'
/>

Notice that the file permissions for the owner (and other groups) have been modified. The missing `r` permission for all groups indicates that no one can
read the file anymore and only the owner(`your-user`) can write to the file.

To verify this, try using the `cat` command. If you are not familiar, the `cat` command displays the contents of a file on the terminal. 

<Highlighter
input='cat test-file.txt'
language='bash'
/>

Once you enter the above command, you'll receive the `Permission denied` error message.

<Highlighter
input='cat: test-file.txt: Permission denied'
language='bash'
/>

Since no one can read the file anymore, the command fails with an error. You can try opening the file with a text editor or any other application, and you will still arrive at the same result.

## Solution — Modifying file permissions

The first solution we'll go over is similar to how we reproduced the error, and that is to assign the required permissions to the file. This is exactly what you need to do for most cases!

Following the previous example, to read the file normally we will need to assign the read permission back to the file. Again, we'll be using the `chmod` 
command and this time will be adding back read access via the `+r` parameter and pass back in the relevant filename. 

<Highlighter
input='chmod +r test-file.txt'
language='bash'
matcher='test-file.txt'
/>

To verify that the file has now has read permissions, we'll use `ls -l`. This should display output similar to the following.

<Highlighter
input='-rw-r--r--  1 your-user your-user    12 Oct 21 23:10 test-file.txt'
language='bash'
matcher='your-user your-user'
/>

Notice the added `r` permission for every group; this indicates that every user group can read the file.

To test out whether your user can read the file at this point, use the `cat` command.

<Highlighter
input='cat test-file.txt'
language='bash'
/>

The command should now display the contents of the file to your terminal.

<Highlighter
input='Hello World'
language='bash'
/>

This output verifies that the file can be read normally.

Depending on why you received the error, you would need to update permsisions other than read access. In many cases, this would most likely be needing to use the `chmod` command to add the executable permission to files, which you can do with the folowing command.

<Highlighter
input='chmod +x filename'
language='bash'
matcher='filename'
/>

**Be sure that you trust the file before adding the executable permission to it**: there is a reason why files aren't executable by default.

## Solution — Using `sudo`

Like with many situations in Linux, using the magic word `sudo` will allow you to do nearly anything, including using files even if you don't have the permission to use them.

**Note:** As a general warning, make sure that you _really_ trust a file before using `sudo` with it.

We'll be continuing with the original example, `test-file.txt`, with the following permissions.

<Highlighter
input='--w-------  1 your-user your-user    12 Oct 21 23:10 test-file.txt'
language='bash'
matcher='your-user your-user'
/>

Notice that no user has the *read* permission on this file. We can verify this using `cat`

<Highlighter
input='cat test-file.txt'
language='bash'
/>

<Highlighter
input='cat: test-file.txt: Permission denied'
language='bash'
/>

As expected, no one — including your current users — can read the file.

However, if we use `sudo` we can override this restriction.

<Highlighter
input='sudo cat test-file.txt'
language='bash'
/>

Using the `sudo` command will open the file up to us. 

<Highlighter
input='Hello World'
language='bash'
/>

Even though no one can read the file, using `sudo`, we can read the file directly without having to modify the file permissions. The same goes for being able to write-to, or execute a file directly without needing the appropriate permissions.

Again, be sure that you are aware of what a file will do prior to writing something new to it, or executing the file. 

## Learn more

Search across open source repositories that use `Permission denied` messaging to understand the error more.

<SourcegraphSearch query="Permission denied" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Linux](https://learn.sourcegraph.com/tags/linux).