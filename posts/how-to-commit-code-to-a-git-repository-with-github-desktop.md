---
title: How to commit code to a Git repository with GitHub Desktop
authorSlug: marek-zaluski
authorDisplayName: Marek Zaluski
tags: [tutorial, git, GitHub, open source]
description: Learn how to create commits in a Git repository with GitHub Desktop
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-04.png
publicationDate: September 13, 2021
imageAlt: Sourcegraph Learn
type: posts
---

Committing code with Git allows you to version control your own work, collaborate with other developers, and contribute to open source projects. GitHub Desktop is an application that provides a graphical interface to interact with Git repositories on your computer, providing an alternative to using Git on the command line. It can also clone, push, and pull remote repositories hosted on GitHub and elsewhere.

In this tutorial, we’ll go through how to commit code to a Git repository using GitHub Desktop.

## Prerequisites

Be sure that you have GitHub Desktop installed. You can install it by going to the [GitHub Desktop website](https://desktop.github.com/) and selecting the version of the software relevant to your operating system.

To follow this tutorial, you should already have a local Git repository on your computer and have made some changes that you want to commit. If you don’t yet have a Git repository on your computer, you can review the official documentation for “[Getting a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository).”

## Step 1 — Opening a repository in GitHub Desktop

If you have multiple local repositories, GitHub Desktop lets you switch between them to select the one you want to work on.

The name of the currently selected repository is displayed in the **Current Repository** tab in the top toolbar of the application. In the screenshot below, that repository is titled `javascript-demo`.

![The Current Repository tab showing the name of the current repository](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/github-desktop-current-repository.png)

This section will provide you with the steps needed to select your desired repository.

### Selecting a repository already present in GitHub Desktop

If you previously used GitHub Desktop to create or clone a repository or have manually added it, it will appear in the list of added repositories.

To select an added repository, open the **Current Repository** panel by clicking on it in the top toolbar. This will display a list of repositories that you can choose from.

![The Current Repository panel showing a list of repositories](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/github-desktop-repositories.png)

If the repository that you want to commit to is in the list, click on it to select it. Once your repository is selected, its name will appear on the **Current Repository** tab, and you can proceed to [Step 2 — Selecting a branch](#step-2--selecting-a-branch).

If the repository is not in the list, you’ll need to add it manually, as explained in the next section.

### Adding a local repository to GitHub Desktop

If you created or cloned your local repository with a tool other than GitHub Desktop, like the Git command-line interface, you’ll need to manually add your repository to GitHub Desktop to be able to access it in the application.

To add a local repository from your file system, open the **Current Repository** panel by clicking on it in the top toolbar and following these steps:

1. Click the **Add** button in the **Current Repository** panel.
2. Select **Add Existing Repository** in the dropdown menu.
3. Browse to the location of your repository in the file system.

![The Add Local Repository dialog box lets you choose a local repository.](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/github-desktop-add-repository.png)

Alternatively, you also have the option of cloning a remote repository hosted on GitHub or another source by selecting **Clone Repository** from the **Add** dropdown. This will also add it to the list of repositories.

After following these steps, your repository’s name should now appear under **Current Repository** in the top toolbar.

## Step 2 — Selecting a branch

Next, ensure that the current branch is the one where you intend to make your commit. The current branch is displayed on the **Current Branch** tab. You can click on this tab to switch branches or to create a new branch.

![The Current Branch tab displaying the `main` branch.](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/github-desktop-current-branch-tab.png)

If you want to create a new branch before committing, use the **New Branch** button in the **Current Branch** panel. Creating a new branch can be useful if you’re working on a new feature and want to keep your changes independent of the main branch, or if you’re making some experimental changes.

When thinking about creating and titling a new branch, consider having it describe what the new code will be doing. For example, if we’re planning to commit some changes to the `README.md` file in our repository, we could use the **New Branch** button to create a new branch and name it `update-readme`.

![The **Current Branch** panel in GitHub Desktop](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/github-desktop-current-branch.png)

Once we’ve selected a branch, its name will be displayed in the **Current Branch** tab.

## Step 3 — Selecting changes to commit

Before committing, you can choose which changed files you want to include in the commit.

The **Changes** panel lists every changed file in your working directory. The header of the list displays a file count, like “3 changed files,” as displayed in the screenshot below.

![The Changes tab showing the list of changed files.](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/github-desktop-changes.png)

Different types of changes are represented by icons to the right of each file name.

- Modified files are shown with a yellow dot in a square.
- Untracked (newly created files) files are shown with a green plus sign (`+`) in a square.
- Deleted files are shown with a red minus sign (`-`) sign in a square.

The top-most checkbox, found in the list header, allows you to select or deselect all files. You can also select files individually by using each file’s checkbox.

![Selecting files using the checkboxes in the file list.](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/github-desktop-changes-selected.png)

For example, in the screenshot above, we’re selecting two changed files (`demo.js` and `README.md`) by making sure their checkboxes are selected. We’re leaving the other file unselected, so it won’t be part of our commit.

## Step 4 — Writing a commit message and committing

In order to proceed to commit our changes, we need to provide a commit message. Each commit needs a commit message that describes the changes made. Commit messages are useful when browsing the history of commits in a repository, and they provide a summary of the changes made over time.

GitHub Desktop lets us provide the commit message in two parts:

- The **Summary** is a short one-line message that summarizes the changes in the commit.
- The **Description** is an optional, more detailed explanation that can be multiple lines long.

For example, we can write the following commit summary for our changed files:

<Highlighter
input='Update README and demo script'
language='bash'
/>

We’ll enter this message into the **Summary** field. When committing complex changes, it can be useful to include more details in the **Description** field. This field is optional, so we can leave it blank.

![Entering a commit message into the **Summary** field.](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/github-desktop-commit-message.png)

With our changes selected and our commit message entered, we can now use the **Commit** button at the bottom to create the commit.

In the screenshot above, the button is labeled **Commit to update-readme** where `update-readme` is the branch that we previously selected. The name of your selected branch should be selected here.

When we click the **Commit** button, a new commit will be created, containing the staged changes. Those changes will disappear from the **Changes** panel, and the **Summary** and **Description** boxes will be cleared. Any unstaged changes will remain unstaged and available to be staged in future commits.

After clicking the **Commit** button, a message confirms that the commit was created, as in the screenshot below.

![The newly created commit displayed below the **Commit** button.](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/github-desktop-committed.png)

We can use the **History** tab to check what we’ve committed. We’ll do this in the next step.

## Step 5 — Checking the commit

To confirm that your commit was created successfully, you can check the history of commits to the repository and verify that your commit is present.

To open the history view, click on the **History** tab. This tab allows you to view the commits made to the repository, with the most recent commit at the top of the list.

![The log of commits in the history view, showing the last commit.](https://storage.googleapis.com/sourcegraph-assets/learn/tutorial-images/github-desktop-history.png)

In the above screenshot, the newly created commit is present at the top of the list. This confirms that it was created successfully and is now part of the repository.

## Learn more

In this tutorial, we created a commit using GitHub Desktop while also learning how to switch repositories, switch branches, and view the commit history.

To learn about other ways to commit code, you can read these tutorials:

- [How to commit code with the Git command-line interface](/how-to-commit-code-with-the-git-command-line-interface)
- [How to commit code to a Git repository with Visual Studio Code](/how-to-commit-code-to-a-git-repository-with-visual-studio-code)

You can also check out the [official Git project website](https://git-scm.com/).
