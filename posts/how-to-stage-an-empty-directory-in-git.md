---
title: How to stage an empty directory in Git
tags: [tutorial, git, open source]
publicationDate: November 30, 2021
description: Use the git add command to stage empty directories in Git
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-09.png
imageAlt: Sourcegraph Learn
browserTitle: Staging empty directories in GitHub with the git add command
type: posts
---

Git repositories cannot contain empty directories. This means that if you create an empty directory in your project and attempt to stage it, it won’t be added to the staging area. This is because Git is only capable of tracking files and is unable to track a directory if there are no files inside. It’s a limitation of how Git represents files internally.

Empty directories can often be useful as temporary storage areas, for example, or as locations for build output. A common workaround to include an empty directory in a Git repository is to put a placeholder file inside so that it’s not truly empty. By convention, this placeholder is usually named `.gitkeep`. 

You can get a sense of how common this convention is by performing a Sourcegraph search to find the presence of files named `.gitkeep` in many popular open source repositories, as demonstrated by the following search query.

<SourcegraphSearch query="file:.gitkeep"/>

If you would like to leverage this method for adding directories to your staging area like the repos that were revealed in the above query, you can also initialize a directory with `.gitkeep`.

Suppose you have an empty directory named `output` that you want to add to a repository. You can first create a placeholder file named `.gitkeep` within that directory by using the [`touch`](<https://en.wikipedia.org/wiki/Touch_(command)>) command in the terminal, which creates a blank file. Then, you can use the `git add` command to stage the directory.

<PrismSyntaxHighlighter
input='touch output/.gitkeep
git add output'
language='bash'
/>

This will stage the `output` directory, which is empty except for the placeholder file, to be committed to the repository.

If you would like to learn more about the Git staging area, read our [How to use the Git staging area, stage changes, and unstage files](/how-to-stage-and-unstage-files-in-git) tutorial.
