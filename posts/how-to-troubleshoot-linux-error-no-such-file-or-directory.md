---
title: How to troubleshoot Linux error No such file or directory
authorSlug: amit-agrawal
authorDisplayName: Amit Agrawal 
tags: [tutorial, Linux, troubleshooting]
publicationDate: October 19, 2021
description: Learn how to error handle No such file or directory in Linux
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: No such file or directory in Linux error handling
type: posts
---

If you are working on a Linux terminal and you receive the following output, you are probably trying to access a file from the wrong directory. 

<OutputHighlighter
input='No such file or directory'
/>

In this tutorial, we'll reproduce the issue and then go over some solutions. Before we get started, you should ensure that you have correct filename and that it is free from typos.

## Reproducing the error

Let's create a directory `foo` and a file `bar.txt` inside of the `foo` directory. We can add some text data to the file so that it is not empty. 

Open your terminal and execute the following commands.

Create directory `foo` with the `mkdir` command. The `mkdir` command stands for "make directory" and will create a new directory in the directory you are currently located within on the terminal. 

<Highlighter
input='mkdir foo'
language='bash'
/>

Create file `bar.txt` inside the `foo` directory. We will use the [`touch` command](https://en.wikipedia.org/wiki/Touch_(command)) to create this file.

<Highlighter
input='touch foo/bar.txt'
language='bash'
/>

Write some data to the file `bar.txt` with the `echo` command, which returns back what we request.

<Highlighter
input='echo "Hello, World" > foo/bar.txt'
language='bash'
/>

The above command uses `echo`, then the text we would like to add to our file in quotes, then the redirection operator `>`, and finally the name of our newly created text file, `bar.txt`.

Let's try to access the data using the `cat` or con**cat**enate command that will read data from the file and give its content as output.

<Highlighter
input='cat foo/bar.txt'
language='bash'
/>

In this case, our ouput will be the following.

<OutputHighlighter
input='Hello, World'
/>

Now, let's try to access the file with an incorrect path.

<Highlighter
input='cat bar.txt'
language='bash'
/>

Because we have not changed directories into the `foo` directory, we'll receive the following output.

<OutputHighlighter
input='cat: bar.txt: No such file or directory'
/>

Now that we have been able to reproduce the error, let's go over possible solutions.

## Check current working directory

You can use the `pwd` command to check your current working directory. The `pwd` command stands for **p**resent **w**orking **d**irectory. You can then use the `ls` command to **l**i**s**t all the files present in the present directory. With these commands, you will get a better idea as to whether you are trying to access a given file through the correct filepath or not.

<Highlighter
input='pwd'
language='bash'
/>

This command will return your current working directory.

<OutputHighlighter
input='/home/your-username'
/>

Next, type `ls` to list the contents of the present working directory.

<Highlighter
input='ls'
language='bash'
/>

This will return a list of all directories and files present in your current directory. You may find output similar to the following, but note that output will be dependent on your actual directory.

<OutputHighlighter
input='Desktop foo Music Public Videos Documents Pictures Downloads Templates'
/>

Through observating the output above, you will notice that the file `bar.txt` is not present in current directory. You will need to move inside of the `foo` directory to access that file, as this is where you created `bar.txt`.

Use the `cd` command, which stands for **c**hange **d**irectory, to move inside the `foo` directory.

<Highlighter
input='cd foo'
language='bash'
/>

This will move you into the `foo` directory, and your command prompt will change. In our example case, where we are in the user directory, the prompt will now be `~/foo$`.


Now we can check for files present in the `foo` directory.

<Highlighter
input='ls'
language='bash'
/>

In our example, we have only one file in this directory, so our output will return the one file we have initialized there. 

<OutputHighlighter
input='bar.txt'
/>

Now that you are in the correct directory, you can check the contents of the file with `cat`. 

<Highlighter
input='cat bar.txt'
language='bash'
/>

Your output will now be what we had expected.

<OutputHighlighter
input='Hello, World'
/>

If you are still experiencing issues finding your file or directory, always check for typos in the file name. Also check the path for the file and your current working directory.

## Use `whereis` command

It's possible that the file you are trying to access is a binary executable file, in this case you can use the `whereis` command to locate the binary. Open your terminal and type the following command, with `filename` standing in for the file you are looking for.

<Highlighter
input='whereis filename'
language='bash'
/>

For example, you can search for the location of `netstat`, which is a command-line utility that displays active TCP connections and more.

<Highlighter
input='whereis netstat'
language='bash'
/>

When you run the above command, you'll get the path to the location of `netstat`, which may be similar to the following output.

<OutputHighlighter
input='/usr/sbin/netstat'
/>

The `whereis` command will return all relevant paths where the binary executable is stored. This way you can check whether a particular binary exists on your system or not, then use Linux navigation commands, like the ones we went through above, to reach the particular binary and execute it.

## Learn more

Search across open source repositories that have the `No such file or directory` to understand the message more.

<SourcegraphSearch query="No such file or directory" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Linux](https://learn.sourcegraph.com/tags/linux).
