---
title: How to stage all changes in Git
tags: [tutorial, git, open source]
publicationDate: November 30, 2021
description: Use the git add command to stage all changes in Git
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-04.png
imageAlt: Sourcegraph Learn
browserTitle: Staging all changes in GitHub with the git add command
type: posts
---

In Git, you don't always need to select specific files or directories for a commit. When this is the case, you can use the `git add` to stage all changes at once. To do that, we'll run `git add` with the `-A` flag (or its synonym, `-all`). No other arguments are necessary when using this flag.

<PrismSyntaxHighlighter
input='git add -A'
language='bash'
/>

This will stage all changes in the repository directory and all subdirectories. It will include all files that are modified, created, or deleted.

`git add -A` is not affected by the current directory. You can run it from within any subdirectory of your project, and it will apply to the entire repository.

If you would like to learn more about the Git staging area, read our [How to use the Git staging area, stage changes, and unstage files](/how-to-stage-and-unstage-files-in-git) tutorial.