---
title: How to rename or remove a file in Git
tags: [tutorial, git, open source]
publicationDate: November 30, 2021
description: Use the git mv command to work with renamed or removed files Git
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-12.png
imageAlt: Sourcegraph Learn
browserTitle: Staging renamed or removed files in GitHub with the git mv command
type: posts
---

It’s a common occurrence to rename or move a file to a different directory in a code repository. In Git, renaming a file is analogous to moving it to a new file name. In either case, Git will initially interpret the change as two distinct changes:

1. The deletion of the original file.
2. The creation of a file with a new name or in a new location in the repository.

To stage a moved or renamed file, you have to stage both of these changes. You could do this manually by running `git add` on both file names, or you can use the `git mv` command.

The `git mv` command renames or moves files and also stages the change in one step. It takes two arguments: a source and a destination.

For example, to rename a file named `todo.txt` to `done.txt`, you can run `git mv` with the original name and new name as arguments.

<PrismSyntaxHighlighter
input='git mv todo.txt done.txt'
language='bash'
/>

This will perform three tasks in one command:

1. Rename the file named `todo.txt` to `done.txt` in the current directory.
2. Stage `todo.txt` as a deleted file.
3. Stage `done.txt` as a newly created file.

After both changes related to a moved or renamed file are staged, Git will identify that it’s the same file under a different path. From that point, it will appear with the label `renamed` in the output of `git status`.

If you would like to learn more about the Git staging area, read our [How to use the Git staging area, stage changes, and unstage files](/how-to-stage-and-unstage-files-in-git) tutorial.