---
title: What are diffs in Git?
tags: [video, git, open source]
publicationDate: September 17, 2021
description: Learn about diffs in Git and how to understand them.
author: marek-zaluski
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/git-diffs-thumbnail.jpg
imageAlt: Learning about Git diffs.
type: videos
---

<EmbeddedYoutubeVideo id="eRwvO8Qyerk" />

## Transcript

When using Git, the word "diff" comes up a lot. What is it diff? How does Git use diffs?

The word “diff” is short for “_diff_erence.” Suppose you're comparing two different files, and you display them side by side and try to spot the differences. This is difficult to do. A diff is a representation of the differences between two files, highlighting the differences so that they are easier to understand.

The word “diff” actually comes from the early days of the Unix operating system, referring to a tool — diff — that was created in 1974. So the concept has been around for a while. 

There are two situations where a diff is a useful representation. One is when you have two files that may be similar and you want to see the differences between the two. The other is when you have two versions of the same file, and you want to understand the changes that were made from one to the other. That second situation is what Git is all about: tracking versions of files, and that's why Git uses diffs extensively.

In Git, every commit is a snapshot of the project. The most common way to inspect a commit and find out what changes it introduced, is to display a diff. There are multiple ways to display the diff of a commit, and many tools that can help you do that. You can do it in the terminal, for example with the Git command line tools. But a more common scenario is to display diffs where a repository is hosted, for example, on GitHub.

Here's an example of browsing a commit on GitHub. Often, a commit contains changes to more than one file. The diff view shows each modified file and displays the changes in each one. Added lines are displayed in green with a plus sign in the left margin, and removed lines are displayed in red with a minus sign in the left margin. When a line is modified, it's actually displayed as a deleted line followed by the new line that replaces it. The sections in blue are there to add additional context about where in the file these changes are located. For example, if the changes are inside of a code block, or inside of a function, that information will appear in the blue area. There are two ways to browse diffs: unified view and split view. In a unified view, changes are displayed together in a continuous way. In a split view, changes are shown side by side, with the original version on the left, and the changed version on the right.

So, diffs are useful for inspecting the changes in a commit. But it's also common to ask the question: what has changed in this entire branch? GitHub also uses diffs when you're browsing pull requests because a pull request is not just a single commit, but can be an entire branch, the diff in a pull request contains all of the changes contained in all the commits in that branch.

For more control over how diffs are displayed, you can use the Git command-line tools that give you many options for how to format the output. With the command-line tools, you can also select any two commits across your entire repository to compare or any two branches.

By understanding how diffs work, you can have a better understanding of the changes that are taking place in any Git repository. To learn more about Git concepts like commits and branches, check out our other learning resources in the links below.

## Learn more

Browse all of our [Git tutorials on Sourcegraph Learn](/tags/git).
