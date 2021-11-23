---
title: How to stage and unstage files in Git
authorSlug: marek-zaluski
authorDisplayName: Marek Zaluski
tags: [tutorial, git, open source]
publicationDate: September 14, 2021
description: Learn how to add and remove changes from the Git staging area.
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-06.png
imageAlt: Sourcegraph Learn
type: posts
---

The staging area in Git is a state that files can be in before being committed to a repository. This tutorial will explain how to add and remove files from the staging area.

## Understanding `git stage`

Git’s staging area allows you to be selective in the changes you want to include in a commit. Sometimes, you may want to commit every change in your working directory to the repository. In other cases, you may want to include some changes in your commit and exclude others. It can be useful to exclude changes if they’re still a work in progress or if they’re unrelated to your current work.

Adding files to the staging area is also referred to as “staging changes” (as in: “I will stage my changes”). Removing files from the staging area is also referred to as “_unstaging_ changes” (as in: “I unstaged these changes”).

The staging area is sometimes called the “staging index” or just “index.” Some Git commands use the term “index” in their output, and it’s also sometimes used in Git documentation. In this usage, “index” is synonymous with “staging area.”

This guide will explore a few different ways that you can stage and unstage files. It will discuss several Git commands that operate on the staging area:

- `git add`
- `git restore`
- `git rm`
- `git mv`
- `git reset`

With these above commands, you’ll be able to stage and unstage changes by file, directory, or pattern.

## Staging files by name

To stage a modified file, use the `git add` command followed by a filename as the argument.

For example, to add a modified file named `license.txt`, run `git add` with the name of the file.

<PrismSyntaxHighlighter
input='git add license.txt'
language='bash'
/>

While the command is called `git add`, note that this use of the word “add” doesn’t only refer to adding new files to the repository. It refers to adding any changed files to the staging area. The staging area can contain created, deleted, or modified files. You can use `git add` on a deleted file, for example.

You can list multiple filenames as arguments to `git add` to stage them all in one step. For example, to stage a set of files named `first.txt`, `second.txt`, and `third.txt`, you can run the following `git add` command.

<PrismSyntaxHighlighter
input='git add first.txt second.txt third.txt'
language='bash'
/>

The above is equivalent to running `git add` on each one individually, as follows.

<PrismSyntaxHighlighter
input='git add first.txt
git add second.txt
git add third.txt'
language='bash'
/>

You can stage a file that is deep in the directory structure by providing its entire path. For example, to stage a file located at `static/pages/docs/index.html`, you can provide that full path to `git add`.

<PrismSyntaxHighlighter
input='git add static/pages/docs/index.html'
language='bash'
/>

The argument to `git add` is always interpreted as relative to the current directory. This means that as an alternative to the above deeply nested path, you can switch to the file’s directory first and then use `git add` on the file name directly. Here’s how you can do this by changing the current directory with `cd` and then staging `index.html` from there:

<PrismSyntaxHighlighter
input='cd static/pages/docs
git add index.html'
language='bash'
/>

By using relative file paths in this way, you can stage changes from any directory in the repository tree.

## Staging directories

Similarly to staging a file, you can stage a directory by providing its path to the `git add` command. When staging a directory, all changed files within all subdirectories will be added. In other words, changes are added recursively. This is useful when you have many files that you intend to commit, all located within a particular directory of the project.

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

## Staging all changes

When you don’t need to select specific files or directories for a commit, you can stage all changes at once. To do that, run `git add` with the `-A` flag (or its synonym, `-all`). No other arguments are necessary when using this flag.

<PrismSyntaxHighlighter
input='git add -A'
language='bash'
/>

This will stage all changes in the repository directory and all subdirectories. It will include all files that are modified, created, or deleted.

`git add -A` is not affected by the current directory. You can run it from within any subdirectory of your project, and it will apply to the entire repository.

## Staging an empty directory

Git repositories cannot contain empty directories. This means that if you create an empty directory in your project and attempt to stage it, it won’t be added to the staging area. This is because Git is only capable of tracking files and is unable to track a directory if there are no files inside. It’s a limitation of how Git represents files internally.

Empty directories can often be useful as temporary storage areas, for example, or as locations for build output. A common workaround to include an empty directory in a Git repository is to put a placeholder file inside so that it’s not truly empty. By convention, this placeholder is usually named `.gitkeep`. 

You can get a sense of how common this convention is by performing a Sourcegraph Cloud search to find the presence of files named `.gitkeep` in many popular open source repositories, as demonstrated by the following search query.

<SourcegraphSearch query="file:.gitkeep"/>

If you would like to leverage this method for adding directories to your staging area like the repos that were revealed in the above query, you can also initialize a directory with `.gitkeep`.

Suppose you have an empty directory named `output` that you want to add to a repository. You can first create a placeholder file named `.gitkeep` within that directory by using the [`touch`](<https://en.wikipedia.org/wiki/Touch_(command)>) command in the terminal, which creates a blank file. Then, you can use the `git add` command to stage the directory.

<PrismSyntaxHighlighter
input='touch output/.gitkeep
git add output'
language='bash'
/>

This will stage the `output` directory, which is empty except for the placeholder file, to be committed to the repository.

## Staging using a pattern

If you want to stage all files that match a pattern, like all files that end in the `.py` extension, you can use `git add` with a [glob pattern](<https://en.wikipedia.org/wiki/Glob_(programming)>).

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

## Staging the deletion of a file

The `git rm` command deletes a file and then stages it. You can think of `git rm` as a replacement for two steps that can otherwise be done independently:

1. Delete the file, which is equivalent to running the `rm` terminal command on the file.
2. Add the deleted file to the staging area, which is equivalent to running `git add` with the path of the deleted file.

Like the `git add` command, `git rm` can be used with files, directories, or patterns as arguments.

For example, to remove and stage a file named `license.txt`, you can run `git rm` as follows.

<PrismSyntaxHighlighter
input='git rm license.txt'
language='bash'
/>

The `license.txt` file will now be in the staging area as a deleted file.

If you’ve already deleted a file by some other means and want to stage it as a deleted file, you don’t need to use `git rm`. You can use `git add` to stage it since you only need to perform the second step of the process.

## Staging a renamed or moved file

It’s a common occurrence to rename or move a file to a different directory in the repository. In Git, renaming a file is analogous to moving it to a new file name. In either case, Git will initially interpret the change as two distinct changes:

1. The deletion of the original file.
2. The creation of a file with a new name or in a new location in the repository.

To stage a moved or renamed file, you have to stage both of these changes. You could do this manually by running `git add` on both file names, or you can use the `git mv` command.

The `git mv` command renames or moves files and also stages the change in one step. It takes two arguments: a source and a destination.

For example, to rename a file named `todo.txt` to `done.txt`, you can run `git mv` with the original name and new name as arguments.

<PrismSyntaxHighlighter
input='git mv todo.txt done.txt'
language='bash'
/>

This will perform three tasks in one command:

1. Rename the file named `todo.txt` to `done.txt` in the current directory.
2. Stage `todo.txt` as a deleted file.
3. Stage `done.txt` as a newly created file.

After both changes related to a moved or renamed file are staged, Git will identify that it’s the same file under a different path. From that point, it will appear with the label `renamed` in the output of `git status`.

## Unstaging a change

We’ve explored a variety of ways to add changes to the staging area. Removing changes from the staging area can occasionally be useful, as well.

Unstaging changes can help when you’ve changed your mind about what you want to commit, or you’ve staged some changes unintentionally.

The `git restore --staged` command allows you to unstage changes and remove them from the staging area. You can think of it as the opposite of the `git add` command.

It’s necessary to include the `--staged` flag to indicate that you want to remove staged changes. If you run `git restore` without that flag, it will instead discard changes in your working directory.

Like `git add`, `git restore --staged` takes a file name as an argument. For example, suppose you previously staged a file named `README.md` using `git add`.

<PrismSyntaxHighlighter
input='git add README.md'
language='bash'
/>

To unstage this file, use `git restore --staged` with the same file name.

<PrismSyntaxHighlighter
input='git restore --staged README.md'
language='bash'
/>

The file’s changes will remain in the working directory, but the file will no longer be present in the staging area.

You can also provide a directory name to `git restore --staged`. This will remove all files within that directory and its subdirectories from the staging area.

## Unstaging all changes

To start the staging process over from the beginning, you can unstage all changes in one command.

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

## Learn more

In this guide, we took a deep dive into different ways to stage changes in Git and to unstage them.

To learn more about using Git to create commits, read [How to commit code with the Git command-line-interface](/how-to-commit-code-with-the-git-command-line-interface).

Check out our other [Git tutorials](/tags/git) or visit the [Sourcegraph Learn home page](/) for more educational resources.
