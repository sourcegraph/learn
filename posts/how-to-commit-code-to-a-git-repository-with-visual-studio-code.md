---
title: How to commit code to a Git repository with Visual Studio Code
author: marek-zaluski
publicationDate: September 9, 2021
tags: [tutorial, git, IDE, open source]
description: Learn how to create commits in a Git repository with VS Code.
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-02.png
imageAlt: Sourcegraph Learn
type: posts
---

Committing code with Git is useful whether you’re working on your own projects, collaborating with others, or contributing to an open source project. Visual Studio Code is an open source IDE (Integrated Development Environment) with support for many programming languages. In addition to being a capable tool for writing and editing source code, VS Code can help you interact with Git repositories and commit changes. If you’re already using VS Code to edit code, it’s convenient to use the same tool to commit your changes with Git.

In this tutorial, we’ll demonstrate how to use the Git features within VS Code to commit code to a Git repository.

## Prerequisites

To follow this tutorial, you need Visual Studio Code installed on your computer. You can install it by following the instructions on the official [Visual Studio Code website](https://code.visualstudio.com/).

You also need Git installed. Visual Studio Code’s Git features depend on the Git command-line tools. You can install Git by following the instructions on the [“Installing Git” page of the official documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

With the above software installed, you should have created or identified a Git repository that you would like to contribute to. To make one of your local code repositories a Git repository, you can review the official documentation for “[Getting a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)”.

## Step 1 — Preparing to make a commit

The **Source Control** panel in VS Code allows you to use Git features. It’s one of the panels that you can select in the **Activity Bar**, which is the vertical bar on the left side of the VS Code interface.

Each panel in the **Activity Bar** is represented by an icon. The **Source Control** icon is highlighted in the screenshot below.

![Location of the Source Control icon in the Activity Bar.](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/vs-code-source-control-icon.png)

Click on the icon to open the **Source Control** panel. This panel provides an interface to view the current changes in your working directory and to create new commits.

![The Source Control panel displays some changes in the repository.](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/vs-code-source-control-panel.png)

The **Changes** section of the panel lists all the files in the working directory that have been changed. The total number of changed files is also reflected on the **Source Control** icon’s badge. In the example in the above screenshot, the badge indicates that there are three changed files, and those three files are listed in the **Changes** section.

By selecting one of the files in the list, we can view the changes to that file. VS Code displays the changes as a **diff view** in a new editor tab. For example, if we select the `README.md` file, we can browse the changes as displayed in the screenshot below.

![An example of a diff view of the changes made to README.md.](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/vs-code-diff-view.png)

To prepare a commit, we will select changes to add to the staging area.

## Step 2 — Adding changes to the staging area

The **staging area** in Git is the collection of changes that will be included in the next commit. The next step is to add some changes to the staging area.

### Staging individual files

Each file in the **Changes** list represents a change in the repository’s working directory that has not yet been staged and is available for staging.

The badge next to each file indicates the type of change:

- The `M` badge indicates that a file is **m**odified. This means that it exists in the repository and has changed since the last commit.
- The `U` badge represents an **u**ntracked file, which means it doesn’t exist in the repository and was newly created since the last commit.
- The `D` badge means that the file was **d**eleted.

Each file has three action buttons. You can reveal these buttons by hovering over or clicking on a file in the list.

![Actions for each file in the Changes section.](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/vs-code-source-control-stage-file.png)

From left to right, the action buttons are:

- **Open File**, which opens the file in a new editor tab for editing.
- **Discard Changes**, which will discard the changes to this file, reverting it to the version from the latest commit.
- **Stage Changes**, which will add the file to the staging area for inclusion in the next commit.

To add a file to the staging area, click on its **Stage Changes** icon, represented by a plus (`+`) sign.

For example, we can stage the `README.md` file in the above screenshot by clicking on it in the list to reveal the action buttons and then selecting the plus (`+`) icon.

If we want to add more changes, we can repeat this process for other files. For example, we can continue by staging the untracked file, `getting-started.txt`. We can add as many changes to a commit as we want.

### Staging all files

In situations where we have many changed files and we want to stage them all, we can use the **Stage All Changes** button. This button is revealed by hovering over the title of the **Changes** section. Its icon is a `+` sign, as illustrated in the screenshot below.

![The actions revealed when hovering over the Changes title, from left to right: Discard All Changes and Stage All Changes, followed by the number of files changed (3).](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/vs-code-source-control-stage-all-changes.png)

After clicking the **Stage All Changes** button, all changed files in the list will be added to the staging area. This is a faster option than adding each file one by one.

## Step 4 — Checking the list of staged changes

After staging some changes, a new section will appear in the **Source Control** panel: **Staged Changes**.

After staging `README.md` and `getting-started.txt`, both files will now be present in the **Staged Changes** section and will no longer appear in the **Changes** section.

![The Staged Changes showing that the README.md file is staged.](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/vs-code-source-control-staged-changes.png)

If any changes remain in the **Changes** section when we commit, they will remain in the working directory and will be available to be staged for a future commit.

After checking that **Staged Changes** contains all the changes that we intend to commit, we can proceed to write a commit message.

## Step 5 — Writing a commit message and committing

Before we can commit our changes, we need to write a commit message. The commit message should describe the change being made. Commit messages are helpful when we’re browsing the history of a repository and trying to understand changes that were made in the past.

For example, we can write the following commit message for our changed files:

```
Update Readme and Getting Started docs
```

We’ll use the **Message** input box at the top of the **Source Control** panel to enter this commit message.

![Writing a commit message in the Message input box.](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/vs-code-source-control-staged-changes-with-message.png)

A common convention in Git is to limit the length of commit messages to a maximum of 50 characters. VS Code helps us follow this convention by showing a warning message if we exceed that length.

We’ll use the **Commit** button located at the very top of the **Source Control** panel to create the commit. This button appears as a check mark icon, as in the screenshot below.

![The Commit button at the top of the Source Control panel.](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/vs-code-source-control-commit-button.png)

When we click the **Commit** button, a new commit is created containing the staged changes. Those changes will disappear from the **Source Control** panel, and the commit message input box will be cleared. Any unstaged changes will remain unstaged and available for inclusion in future commits.

## Step 6 — Verifying the commit

To check that the commit was successful, we can view the commit log and confirm that our commit is present in the repository. Although VS Code doesn’t have a built-in way to display the commit log, we can display it by running a Git command in the terminal: `git log`.

Open the integrated terminal in VS Code by clicking on the **View** menu and clicking on **Terminal**. This should open a **Terminal** panel in the lower half of the window. The integrated terminal can also be opened with the keyboard shortcut: `Ctrl`-`` ` `` (Control and backtick).

To display the commit log in the terminal, run the `git log` command. By default, the command will display a scrollable list of all previous commits. In this case, we’re only interested in checking the latest changes we made, so we can provide the `-1` flag to the command to limit its output to one commit.

```sh
git log -1
```

Here’s the result of the command:

```
commit 5388e04d38e5de13e3968f8d5e1932a9b41e5e53 (HEAD -> main)
Author: Marek <marek@sourcegraph.com>
Date:   Tue Aug 31 18:47:11 2021 -0400

    Update Readme and Getting Started docs
```

In the above output of `git log -1`, we receive the commit ID and the branch name (`main`) on the first line. The output also includes the author and date, followed by the commit message.

Based on this output, we can conclude that the commit was successful and is now part of the repository.

## Learn more

In this tutorial, we learned how to commit changes to a Git repository with VS Code.

<!--
If you want to learn about committing code with the Git command-line tools, read [How to commit code with the Git command-line interface](/how-to-commit-code-with-the-git-command-line-interface).
-->

To learn about ways that VS Code can integrate with Sourcegraph, watch our video about [How to integrate Sourcegraph into your workflows](/how-to-integrate-sourcegraph-into-your-workflows).
