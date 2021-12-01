---
title: How to stage directories in Git
tags: [tutorial, git, open source]
publicationDate: November 30, 2021
description: Use the git add command to stage directories in Git
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-11.png
imageAlt: Sourcegraph Learn
browserTitle: Staging directories in GitHub with the git add command
type: posts
---

Similarly to [staging a file in Git](/how-to-stage-files-in-git), you can stage a directory by providing its path to the `git add` command. When staging a directory, all changed files within all subdirectories will be added. In other words, changes are added recursively. This is useful when you have many files that you intend to commit, all located within a particular directory of the project.

For example, to add all changes in the `docs` directory, provide the directory name to the `git add` command.

<PrismSyntaxHighlighter
input='git add docs'
language='bash'
/>

Similar to staging files, you can specify multiple directories in the same command by listing them. The following example shows how to stage two directories: `docs` and `assets`.

<PrismSyntaxHighlighter
input='git add docs assets'
language='bash'
/>

After running the above command, all changes contained within these two directories will be staged.

If you would like to learn more about the Git staging area, read our [How to use the Git staging area, stage changes, and unstage files](/how-to-stage-and-unstage-files-in-git) tutorial.