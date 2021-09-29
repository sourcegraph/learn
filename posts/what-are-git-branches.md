---
title: What are Git branches?
tags: [video, git, open source]
publicationDate: September 17, 2021
description: Learn about branches in Git.
author: marek-zaluski
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/git-branches-thumbnail.jpg
imageAlt: Diagram of Git branches
type: posts
---

<EmbeddedYoutubeVideo id="7s2oVzeX240" />

## Transcript

A Git repository is primarily a sequence of commits, or snapshots, in a project. But the commits in a Git repository don't all have to be in a straight line, so to speak. They can branch off of each other. In fact, branching is a key feature of Git repositories. In this video, I'll answer the question: _What are branches in Git and how do they work?_

By default, all commits belong to a main branch in Git. Here, one circle represents one commit. A branch is a series of commits that splits off from another series of commits. Every branch has a name. In this image, a branch named `my-branch` splits off from the `main` branch. Any number of branches can split off of another branch. In larger Git repositories, especially those with many collaborators, you sometimes find hundreds of branches.

### Approaches to working with branchces

How are branches useful? One example is feature branches. These are branches where you work on a feature independently from the rest of your project. Experiment branches can be useful for experimenting with changes that you may or may not eventually include in the main branch. And long-running branches are common for things like product versions, or releases or staging environments, for example, where you want to keep some changes independent from the others.

### Commits and branches

So, how do branches really work? You can think of branches like the branches of a tree splitting off from one another. But Git actually represents branches as pointers that point to a commit. Every branch name points to a particular commit, which is the latest commit in that branch. The latest commit is called the tip of the branch. As new commits are added to the branch, the branch pointer that points to that latest commit is moved forward. Knowing that Git treats branches as pointers is helpful because it explains how it's possible to move branches or to move commits between branches.

### Merging branches

Branches can also be merged. Merging a branch into another one brings all the changes that were made in those commits on that branch into another branch. For example, when you're done working on a feature branch and your feature is ready, you might merge it into the main branch.

### Flexible approaches to branches

Branching in Git is really flexible. In projects wiith many collaborators, it’s common to see teams adopt particular branch workflows that they choose, and conventions so that they can collaborate better. Some teams use feature branches for every feature, or they use a long-running development branch and a separate release branch, for example.

To learn more about using Git either in your own projects or to collaborate with others, check out the learning resources and the links below.

## Learn more

- [Git tutorials on Sourcegraph Learn](/tags/git)
