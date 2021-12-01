---
title: How to restore a change in Git
tags: [tutorial, git, open source]
publicationDate: November 30, 2021
description: Use the git restore command to work with renamed or removed files Git
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-13.png
imageAlt: Sourcegraph Learn
browserTitle: Unstage a change in GitHub with the git restore command
type: posts
---

Removing changes from the Git staging area can be useful. Unstaging changes can help when you’ve changed your mind about what you want to commit, or you’ve staged some changes unintentionally.

The `git restore --staged` command allows you to unstage changes and remove them from the staging area. You can think of it as the opposite of the `git add` command.

It’s necessary to include the `--staged` flag to indicate that you want to remove staged changes. If you run `git restore` without that flag, it will instead discard changes in your working directory.

Like `git add`, `git restore --staged` takes a file name as an argument. For example, suppose you previously staged a file named `README.md` using `git add`.

<PrismSyntaxHighlighter
input='git add README.md'
language='bash'
/>

To unstage this file, use `git restore --staged` with the same file name.

<PrismSyntaxHighlighter
input='git restore --staged README.md'
language='bash'
/>

The file’s changes will remain in the working directory, but the file will no longer be present in the staging area.

You can also provide a directory name to `git restore --staged`. This will remove all files within that directory and its subdirectories from the staging area.

If you would like to learn more about the Git staging area, read our [How to use the Git staging area, stage changes, and unstage files](/how-to-stage-and-unstage-files-in-git) tutorial.