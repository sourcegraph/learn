---
title: How to stage the deletion of a file in Git
tags: [tutorial, git, open source]
publicationDate: November 30, 2021
description: Use the git rm command to remove files in the Git staging area
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-08.png
imageAlt: Sourcegraph Learn
browserTitle: Deleting files in the GitHub staging area with the git rm command
type: posts
---

The `git rm` command deletes a file and then stages it. You can think of `git rm` as a replacement for two steps that can otherwise be done independently:

1. Delete the file, which is equivalent to running the `rm` terminal command on the file.
2. Add the deleted file to the staging area, which is equivalent to running `git add` with the path of the deleted file.

Like the `git add` command, `git rm` can be used with files, directories, or patterns as arguments.

For example, to remove and stage a file named `license.txt`, you can run `git rm` as follows.

<PrismSyntaxHighlighter
input='git rm license.txt'
language='bash'
/>

The `license.txt` file will now be in the staging area as a deleted file.

If you’ve already deleted a file by some other means and want to stage it as a deleted file, you don’t need to use `git rm`. You can use `git add` to stage it since you only need to perform the second step of the process.

If you would like to learn more about the Git staging area, read our [How to use the Git staging area, stage changes, and unstage files](/how-to-stage-and-unstage-files-in-git) tutorial.