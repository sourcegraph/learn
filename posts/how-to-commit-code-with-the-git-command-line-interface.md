---
title: How to commit code with the Git command-line interface
author: marek-zaluski
tags: [tutorial, git, open source]
description: Learn how to create commits with the Git command-line tools in the terminal.
publicationDate: September 10, 2021
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-01.png
imageAlt: Sourcegraph Learn
type: posts
---

Commits are the fundamental building blocks of any Git repository. They’re the snapshots that represent the state of a repository’s files over time. Committing code with Git lets you collaborate with other developers, contribute to open source projects, and version control your own projects.

This tutorial will discuss how to create commits in the terminal using Git’s command-line tools. We’ll go through five steps: checking the repository status, selecting changes to be committed, checking the staged changes, creating the commit, and finally checking that the commit was successful.

## Prerequisites

This tutorial is suitable for those who already have a Git repository. It assumes that you’ve made changes to some files and that you want to commit those changes to the repository.

You will need to have the Git command-line tools installed and configured. For installation instructions, visit the [“Installing Git” chapter of the Git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

The version of Git used in the examples in this tutorial is 2.32.0. You can check that you have Git installed and verify its version by running `git version` in your terminal.

```sh
git version
```

You’ll receive output similar to the following, which states your version number.

```
git version 2.32.0
```

Note that when talking about Git, the word “commit” can be used both as a noun (as in: “Here is the latest commit.”) and a verb meaning “to create a commit” (as in: “I will commit this change.”).

## Step 1 — Checking the repository status

First, it’s useful to get a summary of the changes that we’ve made in our project’s working directory. This will help us select the changes that we want to add to our commit. Run the `git status` command:

```sh
git status
```

The output of the command tells us about the changes that are available to be added to our commit. The first section of the output that we’ll pay attention to is titled `Changes not staged for commit`.

```
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md
```

This section lists files that already exist in the repository and have been modified since the last commit. It tells us that we have one modified file, `README.md`.

The second section that is relevant to us is titled `Untracked files`. It lists newly created files that don’t yet exist in the repository.

```
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        getting-started.txt
```

The above output tells us that there’s one new file in the working directory, `getting-started.txt`.

After reading the output of `git status`, we can proceed to select the changes that we want to commit, and we’ll do that by adding those changes to the staging area.

## Step 2 — Selecting changes to be committed

In a Git repository, the **staging area** is the collection of changes that will be included in the next commit. Before we can commit our changes, we have to stage the changes we intend to include in the commit.

### Adding a modified file to the staging area

To add a modified file to the staging area, we use the `git add` command. The `git add` command, in its simplest form, expects a file name as an argument. Here’s an example in which we add the file named `README.md` to the staging area:

```sh
git add README.md
```

If we run `git status` again at this point, `README.md` will be gone from the “Changes not staged for commit” section and will instead be present under “Changes to be committed.” This confirms that it has been added to the staging area.

We can continue by adding more files using `git add`. For example, we’ll add the newly created file, `getting-started.txt`:

```sh
git add getting-started.txt
```

After this command, `getting-started.txt` will also be included in the “Changes to be committed” section of the `git status` output. By using `git add` in this way, we can include as many changed files as we want in our commit.

### Adding all current repository changes to the staging area

Rather than adding each changed file one by one to the staging area, a common alternative is to add all changed files in one command. This applies to situations where we don’t want to selectively choose which changes to commit because we want the commit to be a snapshot of the entire working directory.

We can add all files by providing the `-A` flag (which is short for `--all`) to `git add` instead of specifying a file name:

```sh
git add -A
```

The above command will recursively add all the modified files in all subdirectories in the current repository to the staging area, regardless of where we are running the command from. We can run this from any subdirectory of the repository.

### Removing changes from the staging area

It’s possible to remove changes from the staging area using the `git restore` command. This is useful if you change your mind about what changes you want to commit or have accidentally added some files that you didn’t intend to add.

The `git restore` command expects a file name, similarly to `git add`, and requires the `--staged` flag to indicate that we intend to unstage a file that is currently staged. Here’s an example:

```sh
git restore --staged README.md
```

This will remove `README.md` from the staging area. The changes to the file won’t be lost. They will remain in the working directory.

## Step 3 — Checking staged changes before committing

Once we’ve selected the changes that we want to commit, it’s a good idea to check the status of the repository again. This helps us confirm that the changes we’re about to commit are the ones we intend to commit.

Now that we’ve added two files, `README.md` and `getting-started.txt`, we can check the status of the repository by running `git status` again. The output now includes a section called `Changes to be committed`:

```
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   README.md
        new file:   getting-started.txt
```

The output confirms that we have two changes in the staging area: `README.md`, which is modified, and `getting-started.txt`, which is new.

If we have any other modified files that we haven’t staged, they will be present in the `Changes not staged for commit` section. These changes won’t be included in the commit and will remain in the working directory after the commit is created.

## Step 4 — Creating the commit

To create a commit, we use the `git commit` command, which will perform these tasks:

- Create a new commit on top of the latest commit in the current branch.
- Move all staged changes into the new commit.
- Attach the date, author, and message to the new commit.
- Update the current branch to include the new commit.
- Clear the staged changes from the staging area.

Before we can run the command, we need to write a commit message.

### Writing a commit message

The commit message is an important piece of information that we need to provide to the `git commit` command. The commit message is the text that describes the changes that we’re making.

Commit messages are helpful when you’re browsing through the commit history of a project. They show you, at a glance, the sequence of changes made to the project. It’s common to browse commits by looking at the log of each commit’s message, date, and author.

Suppose that we’re committing changes to update the `README.md` file and add a `getting-started.txt` file. Our commit message could be:

```
Update README and add getting-started file
```

We’ll use this message with the `git commit` command in the next step.

### Committing

Having a commit message in mind, we’re now ready to run the `git commit` command.

We specify the commit message by providing it as an argument to `git commit`. The message should be a string in quotes preceded by the `-m` flag, which stands for “message.”

With our example commit message, the command would look like this:

```sh
git commit -m “Update readme and add getting-started file”
```

Here’s the output when we run this command:

```
[main 5388e04d38] Update readme and add getting-started file
 2 files changed, 1 insertion(+), 1 deletion(-)
 create mode 100644 getting-started.txt
```

The above output tells us a few things about the commit that we just created: the number of files changed, the number of insertions and deletions (which is a count of lines affected), and the list of created files.

Because `git commit` acts on our local file system and doesn’t automatically send our commit anywhere, we’ll need to use the `git push` command to push our commit to a remote repository such as GitHub.

## Step 5 — Checking the commit

After running `git commit`, we can check that it was created successfully with the `git log` command.

The `git log` command outputs a list of recent commits. Since we’re only interested in checking the last commit, we can shorten the output by adding the `-1` option, which will display only the most recent entry.

```sh
git log -1
```

This helps us confirm that the last commit is, in fact, the one that we just created. Here’s the result when we run `git log -1` after creating our commit:

```
commit 5388e04d38e5de13e3968f8d5e1932a9b41e5e53 (HEAD -> main)
Author: Marek <marek@example.com>
Date:   Tue Aug 31 18:47:11 2021 -0400

    Update readme and add getting started file
```

In the above output of `git log -1`, we see the commit ID and the branch name (`main`) on the first line. The output also includes the author and date, followed by the commit message.

Based on this output, we can conclude that the commit was successful and is now part of the repository.

## Learn more

In this tutorial, we explored how to create Git commits with command-line tools. There are other ways to create Git commits, and there are many tools that can facilitate the task.

<!--
Check out our tutorials about committing code to Git with other tools:

- [How to commit code to a Git repository with Visual Studio Code](/how-to-commit-code-to-a-git-repository-with-visual-studio-code)
- [How to commit code to a Git repository with GitHub Desktop](/how-to-commit-code-to-a-git-repository-with-github-desktop)
-->

Visit the [Sourcegraph Learn home page](/) for more educational resources.
