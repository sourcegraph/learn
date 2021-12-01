---
title: How to stage files in Git
tags: [tutorial, git, open source]
publicationDate: November 30, 2021
description: Use the git add command to stage files in Git
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-07.png
imageAlt: Sourcegraph Learn
browserTitle: Staging files in GitHub with the git add command
type: posts
---

When working in a Git repository, you have access to a staging area that can be used before committing a modified file to a repository. This short tutorial will walk you through the `git add` command along with a filename as an argument, which is used to stage a modified file in a Git repo..

For example, to add a modified file named `license.txt`, run `git add` with the name of the file.

<PrismSyntaxHighlighter
input='git add license.txt'
language='bash'
/>

While the command is called `git add`, note that this use of the word “add” doesn’t only refer to adding new files to the repository. It refers to adding any changed files to the staging area. The staging area can contain created, deleted, or modified files. You can use `git add` on a deleted file, for example.

You can list multiple filenames as arguments to `git add` to stage them all in one step. For example, to stage a set of files named `first.txt`, `second.txt`, and `third.txt`, you can run the following `git add` command.

<PrismSyntaxHighlighter
input='git add first.txt second.txt third.txt'
language='bash'
/>

The above is equivalent to running `git add` on each one individually, as follows.

<PrismSyntaxHighlighter
input='git add first.txt
git add second.txt
git add third.txt'
language='bash'
/>

You can stage a file that is deep in the directory structure by providing its entire path. For example, to stage a file located at `static/pages/docs/index.html`, you can provide that full path to `git add`.

<PrismSyntaxHighlighter
input='git add static/pages/docs/index.html'
language='bash'
/>

The argument to `git add` is always interpreted as relative to the current directory. This means that as an alternative to the above deeply nested path, you can switch to the file’s directory first and then use `git add` on the file name directly. Here’s how you can do this by changing the current directory with `cd` and then staging `index.html` from there:

<PrismSyntaxHighlighter
input='cd static/pages/docs
git add index.html'
language='bash'
/>

By using relative file paths in this way, you can stage changes from any directory in the repository tree.

If you would like to learn more about the Git staging area, read our [How to use the Git staging area, stage changes, and unstage files](/how-to-stage-and-unstage-files-in-git) tutorial.