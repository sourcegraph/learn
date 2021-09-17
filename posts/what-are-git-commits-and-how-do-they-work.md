---
title: What are Git commits and how do they work?
tags: [video, git, open source]
publicationDate: September 17, 2021
description: Learn about commits in Git and how they work.
author: marek-zaluski
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/git-commit-thumbnail.jpg
imageAlt: Diagram of Git commits
type: posts
---

<EmbeddedYoutubeVideo id="zXlNqCioxBY" />

## Transcript

The building block of every Git repository is the commit. A Git repository is really just a collection of commits. In this video, I'll answer the question: What is a commit? And how do commits work?

So what is a commit? Well, it's a snapshot of the entire project at a particular point in time. This means that every commit contains the exact state of every file that's present in that snapshot.

Now, are commits the same thing as file versions? Commits are actually versions of the entire project, not versions of individual files. In other words, the entire project has one history of commits, rather than each file having its own independent history of commits, or versions.

How are commits created in Git? Well, they're created when you, the user, choose to create a commit. In other words, you choose when to create a snapshot of your project. This is different than some tools like Google Docs that will automatically version your files.

When do you decide to create a commit? Well, it's up to you. I sometimes choose to commit often when I'm doing many small changes. And other times I like to wait until I have a more significant change ready before I create a commit.

Sometimes people talk about commits as if they are the changes that have been done one after the other in a project. But it's more accurate to think of commits as snapshots. We sometimes do a look at the changes that are in a commit. But this is, by default, usually a comparison with the previous commit. In other words: what has changed in this commit since the last snapshot. It's also possible to compare commits, not just to the previous one, but to other commits further in the past in the project or even across different branches of the repository.

Commits have an order. So for every commit, there will be a previous commit which we call the parent commit. The only exception to this is the initial commit when the project is created.

In addition to storing the state of the project, commits also attached some extra information. This information answers a few questions. First of all: when? When was this commit created? What's the date and time? Second: who? Who created this commit and who authored this particular change? And finally, what changed? The commit message is the message that we write on every commit, which describes what has been changed since the previous commit. This is particularly useful when you are reading the history of all the commits in a repository and want to know, at a glance, what's changed and at what time.

The commit history also allows you to go back in time. You can revisit the repository at any previous commit and rollback to the changes and the state that was present at the time. If you're collaborating with multiple people, the commit history is a really useful tool to find out about changes being made by your collaborators, but also to go back and, if you have a question about how a particular past change was made, you can find out by looking at the author of a commit to find out who you can ask for questions about that change.

To learn more about how to version control your own project, by creating commits, or to learn how to collaborate on Git projects with other people and contribute to open source for example, check out these links with more information and some of our tutorials about Git and other topics.

## Learn more
- [How to commit code with the Git command-line interface](/how-to-commit-code-with-the-git-command-line-interface)
- [Git tutorials on Sourcegraph Learn](/tags/git)
