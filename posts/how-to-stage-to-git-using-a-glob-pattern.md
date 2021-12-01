---
title: How to stage to Git using a glob pattern
tags: [tutorial, git, open source]
publicationDate: November 30, 2021
description: Use the git add command to stage files matching a glob pattern in Git
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-05.png
imageAlt: Sourcegraph Learn
browserTitle: Staging files following a glob pattern in GitHub with the git add command
type: posts
---

When you are working in Git and you want to stage all files that match a pattern — for example, all files that end in the `.py` extension — you can use `git add` with a [glob pattern](<https://en.wikipedia.org/wiki/Glob_(programming)>).

Glob patterns use the star symbol (`*`) as a wildcard to match file names. For example, to stage all files with a `.py` extension in the current directory, you can provide the following pattern to `git add`:

<PrismSyntaxHighlighter
input='git add *.py'
language='bash'
/>

The double star pattern (`**`) is a wildcard that matches any subdirectories in a file’s path. For example, to recursively stage all files named `index.js` in all subdirectories of the project, you can run `git add` with the following pattern.

<PrismSyntaxHighlighter
input='git add **/index.js'
language='bash'
/>

This will find all files named `index.js`, regardless of their subdirectory, and stage them.

The above two patterns can be combined. For example, you can run the following command to stage all files ending in the `.py` extension in all subdirectories.

<PrismSyntaxHighlighter
input='git add **/*.py'
language='bash'
/>

The double star (`**`) pattern will search across all subdirectories recursively and the single star (`*`) pattern will match all filenames with a `.py` extension in the project.

If you would like to learn more about the Git staging area, read our [How to use the Git staging area, stage changes, and unstage files](/how-to-stage-and-unstage-files-in-git) tutorial.