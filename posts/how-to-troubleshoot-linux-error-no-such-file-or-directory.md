---
title: How to troubleshoot Linux error No such file or directory
author: amit-agrawal
tags: [tutorial, Linux, troubleshooting]
publicationDate: today's date
description: Learn how to error handle No such file or directory in Linux
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: No such file or directory in Linux error handling
type: posts
---

If you are working on Linux Terminal and you recive following output ,you are trying to aceess the wrong file or probably trying to access it from wrong directory.

```bash: No such file or directory```

In this tutorial, we'll reproduce the issue and then go over some solutions.
## Reproducing the error

Let's create a directory foo and file bar.txt inside foo directory.Add some text data to the file. Open your terminal and execute the following commands.

Create directory foo

```
mkdir foo
```

Create file bar.txt inside foo directory.

```touch foo/bar.txt```

Write some data to the file bar.txt

```echo "Hello Wrold" >> foo/bar.txt```

Let's try to access the data using cat command

``cat foo/bar.txt``

The ouput will be 

```Hello Wrold```

Now, let's try to acess the file with incorrect path

```cat bar.txt```

The output will be
```cat: bar.txt: No such file or directory```

Now that we have been able to reproduce the error, let's go over possible solutions.

## Check Current working directory

You can use ```pwd``` command to check your current working directory & use ```ls``` command to list all the files present in the present directory.You will get a idea whether you are trying to accees it through right filepath or not.

```pwd```

This will return your current working directory

```/home/gopheramit```


```ls```

This will return list of directory and files present in your current directory,typically this is the output however output will be dependent on your current directory

```Desktop foo Music Public Videos Documents Pictures Downloads Templates```

By simple observation you can see the file bar.txt is not present in current directory.
You need to move inside foo directory(where you created bar.txt)

Use ```cd``` to move inside direcotry

```cd foo```

This will move you in foo and your command prompt would be like```~/foo$```


Check for files present in foo directory

```ls```

This will return

```bar.txt```

Now you can check the contents of file

```cat bar.txt```

Hello World

## Usefull Commands and Observations
To navigate into the directory,use ```cd directory_name```

To navigate into the root directory, use ```cd /```

To navigate to your home directory, use ```cd``` or ```cd ~```

To navigate up one directory level, use ```cd ..```

To navigate to the previous directory,use ```cd -```

To check current directory ```pwd``

To list directory's and files in current directory,use ```pwd```

Always check typo for file name,Check the path for the file and current directory.

## Use whereis command

It's possible that the file you are trying to access is binary executable file,in this case use ```whereis``` command to locate the binary.Open you terminal and type the following command.

```whereis filename```

It will return all the path where the binary executable is stored,this way you can check particular binary exists on your system or not then use above commands to reach the particular bianry and execute is.


## Learn more

Search across open source JavaScript repositories that have the `No such file or directory` to understand the message more.

<SourcegraphSearch query="No such file or directory" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [Linux](https://learn.sourcegraph.com/tags/linux).
