---
title: How to reset a Git repository
tags: [tutorial, git, open source]
publicationDate: November 30, 2021
description: Use the git reset command to unstage all changes in Git
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-03.png
imageAlt: Sourcegraph Learn
browserTitle: Resetting all changes in GitHub with the git reset command
type: posts
---

To start the Git staging process over from the beginning, you can unstage all changes in one command.

The `git reset` command removes all changes from the staging area.

<PrismSyntaxHighlighter
input='git reset'
language='bash'
/>

After running the above command, all changes will be unstaged but will remain in the working directory. The output gives you a summary of those changes, as in the example below.

<Highlighter
input='Unstaged changes after reset:
M       index.html
D       script.js
D       style.css'
/>

From here, you can start staging changes again.

If you would like to learn more about the Git staging area, read our [How to use the Git staging area, stage changes, and unstage files](/how-to-stage-and-unstage-files-in-git) tutorial.