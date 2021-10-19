---
title: How to use the `git status` command to understand the state of a Git repository
author: marek-zaluski
tags: [tutorial, git, open source]
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-05.png
publicationDate: October 18, 2021
description: Learn how to use Git status to understand the state of a repository.
type: posts
---

When working with a Git repository and performing actions like staging, unstaging, and committing, almost every command changes the state of your repository in some way.

The `git status` command provides a lot of information about the state of a Git repository at any given time. It lets you inspect changes in the staging area and working directory, which makes it particularly useful while staging and committing. The command’s output can help you better understand how a Git repository works and how different Git commands impact it.

In this guide, we’ll explore how to use `git status` and understand its output.

## Running the `git status` command

To get a summary of the status of the repository, run `git status` in your terminal in your repository directory. It doesn’t require any arguments.

<Highlighter
input='git status'
language='shell'
/>

If you run the command on a freshly cloned repository, you will get the following output.

<Highlighter
input={`On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean`}
language='shell'
/>

We can interpret the message as follows.

* `On branch main` — Our current branch
* `Your branch is up to date with 'origin/main'.` — Our local branch has the same commit history as the remote branch
* `nothing to commit` — There are no changes in the staging area
* `working tree clean` — There are no changes in the working directory, which means that the working directory is an exact copy of the latest commit

After running one command, we’ve learned about the current branch, its state relative to the remote branch, the state of the staging area, and the state of the working directory.

## Displaying changes in the working directory

When you’ve made some changes in the working directory, `git status` gives you information about which files have been modified, created, or deleted.

Suppose you run `git status` in a repository after making the following three changes in the working directory.

1. Modify a file named `index.html`
2. Create a new file named `style.css`
3. Delete a file named `script.js`

The following output demonstrates how `git status` represents these changes.

<Highlighter
input={`On branch main
Your branch is up to date with 'origin/main'.
  
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html
        deleted:    script.js
   
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        style.css
     
no changes added to commit (use "git add" and/or "git commit -a")`}
language='shell'
/>

We can learn the following from the above output.

* `Changes not staged for commit` — Git is aware of the modified files listed in this section, but these modifications aren’t yet in the staging area (note that modified and deleted files are listed here, but not created files)
* `Untracked files` — This section lists new files that have been created but not yet added to the repository.
* `no changes added to commit` — No changes are staged to the staging area

When Git detects a new file in the working directory, it considers it “untracked.” Untracked files are newly created files that don’t exist in the repository’s current commit. They’re called “untracked” because Git hasn’t yet started tracking their changes.

## Understanding staged files

After you stage some changes, the output of `git status` will reflect this. Suppose we stage all of the above changes in the working directory by running `git add -A`, and then run `git status` again.

The output will now describe the contents of the staging area as follows.

<Highlighter
input='On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   index.html
        deleted:    script.js
        new file:   style.css'
language='shell'
/>

Note that a new section is now present, titled `Changes to be committed`. The sections that appeared previously, titled `Changes not staged for commit` and `Untracked files`, are no longer present. This reflects the fact that there are no unstaged changes remaining in the working directory. The file which was previously considered untracked is now in the staging area, so it’s labeled `new file` and is no longer untracked.

The changes listed in the `Changes to be committed` section will be included in the next commit when you run the `git commit` command. It’s often helpful to run `git status` to check your staged changes before committing and make sure you haven’t forgotten to stage any changes.

## Understanding renamed or moved files

After you move or rename files in the working directory, Git can’t initially determine that the files were moved or renamed. Instead, Git interprets the change as two separate changes: a deleted file and an untracked file.

Here’s the output from `git status` after renaming a file named `README.md` to `README2.md`:

<Highlighter
input={`Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    README.md
   
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README2.md`}
language='shell'
/>

After you stage both of these changes, Git is able to determine that the contents of both files are identical. Based on this, Git will then list the change as a single entry  `Changes to be committed` section.

<Highlighter
input='Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        renamed:    README.md -> README2.md'
language='shell'
/>

The `renamed` label displays the file’s original name followed by its new name.

When moving files across directories, the change is displayed in a similar way. For example, if you move `README.md` to a new directory called `docs/pages`, the output will also list it as `renamed` and will display the file’s new location.

<Highlighter
input='Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        renamed:    README.md -> docs/pages/README.md'
language='shell'
/>

Git doesn’t differentiate between renaming and moving files. It represents both types of changes as “renamed” files.

## Understanding differences between local and remote branches

In addition to describing local changes, `git status` also reports the status of your current branch relative to its corresponding remote branch. To get an accurate result, the state of the remote branch must be fetched in Git. Run `git fetch` to ensure that your local repository is aware of the latest remote changes.

If your current branch is in an identical state to the remote branch, `git status` will state that the branch is up to date at the top of its output.

<Highlighter
input={`On branch main
Your branch is up to date with 'origin/main'.`}
language='shell'
/>

In the above example, `origin/main` is the name of the remote branch. It’s prefixed with the name of the remote repository, which is `origin` by default.

If you’ve created some commits on your local branch and haven’t yet pushed them to the remote branch, `git status` will reflect this by indicating that your branch is ahead of the remote branch.

<Highlighter
input={`On branch main
Your branch is ahead of 'origin/main' by 2 commits.
  (use "git push" to publish your local commits)`}
language='shell'
/>

On the other hand, if the remote branch contains commits that haven’t yet been pulled into your local branch, the output will indicate that your branch is behind the remote branch.

<Highlighter
input={`On branch main
Your branch is behind 'origin/main' by 3 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)`}
language='shell'
/>

Both of the above situations are possible at the same time. You can have local commits that aren’t yet pushed while also having commits on the remote branch that you haven’t yet pulled. In this case, the output will describe the branches as having “diverged” and will display the number of commits on each.

<Highlighter
input={`On branch main
Your branch and 'origin/main' have diverged,
and have 2 and 3 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)`}
language='shell'
/>

When collaborating with others or contributing to a remote repository, it’s useful to pay attention to the status of your local branch compared to the remote branch. This information lets you keep track of local commits that you can push and remote commits that need to be pulled.

## Using short output format

Once you’re used to reading the output of `git status`, you can use the short output option to get a more concise summary of the same information.

To run `git status` with the short output option, add the `-s` flag (which stands for “short”) to the command. 

<Highlighter
input='git status -s'
language='shell'
/>

In a repository with a modified, deleted, and created file, the output will be similar to the following.

<Highlighter
input='M index.html
 D script.js
?? demo.js'
language='shell'
/>

The short output format provides the same list of files and their statuses as the default output format but in an abbreviated form. It displays a letter or symbol to indicate the state of each listed file, as described below.

* `M` — **m**odified
* `D` — **d**eleted
* `??` — untracked 

The short output format can be a convenient alternative to the default format. It’s particularly useful when you’re only interested in checking the status of changed files. If you want to know the current branch and its status relative to the remote branch, you still need to use the default longer format.

## Using verbose output format

The `git status` command also supports a verbose option that provides more details about staged changes.

To enable the verbose output option, run `git status` with the `-v` flag (short for “**v**erbose”).

<Highlighter
input='git status -v'
language='shell'
/>

If you don’t have any staged changes, this will produce the same output as `git status` without the verbose option. However, if you do have staged changes, the command will describe every staged change by displaying the diff of the change.

<Highlighter
input={`On branch update-readme
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   index.html
   
diff --git a/index.html b/index.html
index a39afed..d8c7d8f 100644
--- a/index.html
+++ b/index.html
@@ -1,5 +1,5 @@
 <h1>JavaScrip Demo app</h1>
  
-<p>Please click the button below.</p>
+<p>Please click the button below to begin.</p>
   
 <button id="begin">Begin</button>`}
language='shell'
/>

The above output indicates that the `index.html` file is staged and displays the details of the lines that were changed.

The verbose option is useful when you want to inspect the details of every staged change before committing. As an alternative, it’s also possible to use `git diff --staged` to display the details of every staged change as a diff. Read the [official documentation on the `git diff` command](https://git-scm.com/docs/git-diff) to learn more about displaying changes as diffs.

## Learn more

To learn about more ways you can inspect a Git repository’s state, check out the [`git log`](https://www.git-scm.com/docs/git-log) command, which lets you browse the commit history and learn about previously committed changes.

To display details about changes in the staging area, or about the changes made between commits, check out the [`git diff`](https://git-scm.com/docs/git-diff) command which lets you inspect changes line by line.

We also have several other tutorials and videos about Git that you can review:

* [How to stage and unstage files in Git](/how-to-stage-and-unstage-files-in-git)
* [How to commit code to a repository with the Git command-line interface](/how-to-commit-code-with-the-git-command-line-interface.md)
* [What are diffs in Git?](/what-are-diffs-in-git)
* [What are Git branches?](/what-are-git-branches)

Check out all of the available [Git tutorials on Sourcegraph Learn](/tags/git).
