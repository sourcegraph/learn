---
title: How to install and set up Python on Windows 10
authorSlug: caleb-hock
authorDisplayName: Caleb Hock
tags: [python, tutorial, Windows]
publicationDate: December 27, 2021
description: Follow these steps to install and set up Python 3 on a Windows 10 computer
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-13.png
imageAlt: Sourcegraph Learn
browserTitle: Setting up Python 3 on Windows 10
type: posts
---


Python is an extremely adaptable language that you can set up and use quickly. It has a wide range of uses and is a great language to pick up for programmers of any skill level.

In this tutorial, we will cover how to install and set up a Python 3 working environment on Windows 10. We will be referring to the latest release of Python (at the time of writing, version 3.10.1) throughout the majority of this tutorial.

## Prerequisites

In order to follow along, you will need to have administrative access to a computer running Windows 10 that has access to the internet (that is, you should be able to install and run programs on this machine that you download from the internet). 

## Step 1 — Download the Python 3 executable installer

First, you will want to download the installer in order to set up Python on your machine. You can find the link for this on [python.org/downloads](https://www.python.org/downloads/). This site should be able to recognize that you are accessing it from a Windows computer, confirm that this is the case or navigate to the Windows-specific download.

You can either install the latest version of Python by clicking on the **Download Python** button (note that this will include a version number, such as `3.10.1`), or you can find previous versions of Python by scrolling down on the page.

## Step 2 — Run the Python 3 executable installer

You will want to navigate through your file explorer to where you downloaded the Python 3 installer. It will most likely be in your `Downloads` folder. Once found, double-click the file in order to run the executable.

Once the executable begins running and you are on the first screen, you will want to check the box that says **Add Python 3.10 to PATH** (note that Python 3.10 is the version of Python at the time of writing). This will allow you to run your Python code in the command prompt. You can keep the **Install launcher for all users (recommended)** box checked as this has no impact on performance. If you want to install to a different directory or not install the recommended features, you can click **Customize installation**. Otherwise, click **Install Now** at the center of the prompt. 

When prompted with the screen that reads **Do you want to allow this app to make changes to your device?**,  ensure that you are downloading the file from the Python Software Foundation, which should be marked as a “Verified publisher”. At this point, you can select the **Yes** button as long as you are satisfied with moving forward. The installer will run once you approve it to make changes to your machine.

Once the installer has run, you can optionally disable the path length limit by clicking on the **Disable path length limit** option. This will also have no effect on performance and will resolve name length issues that may occur in the future.

You can close the installer program by clicking the **Close** button once you reach the **Setup was successful** screen. 

## Step 3 — Verify the Python 3 installation

You will want to verify that the installer correctly installed Python onto your computer. You can do this by opening the command prompt. To do this, navigate to the **Start** menu, type `cmd`, and then run the command prompt. 

You should have your terminal or command prompt open with the following line before your cursor:

<Highlighter
input={`C:\\Users\\User>`}
matcher='User>'
/>

Once you have opened the command prompt, you can type the following command to verify your Python installation.

<PrismSyntaxHighlighter
input={`python --version`}
language='bash'
/>

When this command is run, it should output the current version of Python installed. At the time of this tutorial, it should output the following.

<Highlighter
input='Python 3.10.1'
matcher='3.10.1'
/>

If this did not output correctly, you may need to close and reopen the Command Prompt, retrace your steps to determine if an error was made, or you can  re-download the installer and run it again. Python will not be successfully installed until you get output similar to the above.

## Step 4 — Verify the pip installation

In addition to Python, you will also want to make sure pip was installed. A package manager for Python, pip allows you to include a wide range of libraries to enhance your code. Checking the installation of pip can also be done in the command prompt, similarly to verifying the Python installation. 

In the command prompt, you can run the following command.

<PrismSyntaxHighlighter
input={`pip --version`}
language='bash'
/>

At the time of this tutorial, the below is similar to the output you should expect with the relevant recent version numbers.

<Highlighter
input='pip 21.3.1 from C:\Users\User\AppData\Local\Programs\Python\Python310\lib\site-packages\pip (python 3.10)'
matcher='21.3.1'
/>

Similarly to verifying the Python installation, if this did not output correctly, you may need to re-download and run the installer again.

If you have a version number that is lower than the [current stable pip release](https://pip.pypa.io/en/stable/), you can update it with the following command.

<PrismSyntaxHighlighter
input={`py -m pip install --upgrade pip`}
language='bash'
/>

If you are all up to date, you’ll receive feedback such as `Requirement already satisfied`, otherwise you’ll receive feedback that the new version was successfully installed.

## Step 5 — Set up a virtual environment 

Virtual environments allow you to set up individual working environments for your Python projects, keeping relevant packages and dependencies discrete for each project, and are a recommended practice for programming in Python. By default, packages installed using pip will be installed system wide, which  is not necessarily desirable because when you make changes to a specific package, it will affect all your Python projects. 

We’ll be using virtualenv for our programming environment. To install virtualenv, type this command into the command prompt.

<PrismSyntaxHighlighter
input={`pip install virtualenv`}
language='bash'
/>

Using pip, you have now installed virtualenv to be used on your machine. You will have received output indicating that virtualenv was successfully installed.

To set up a virtual environment, you will want to navigate to the folder where your project is stored. You can do that by utilizing the `cd` and `dir` commands. The `cd` command will allow you to _**c**hange **d**irectories_ within your file system, while `dir` will list out all files and directories within your current working directory. If you don’t have a current project, you can create a new directory in either your `Documents` or `User` directory called `python-project` or something more descriptive. Move into that new folder.

Once you have navigated to your project directory, you can create a virtual environment by typing the following command. We’ll call our virtual environment `my_env`, but you should use a name that is relevant for your project that you will remember.

<PrismSyntaxHighlighter
input={`virtualenv my_env`}
language='bash'
matcher='my_env'
/>

When you have a new command prompt line, your environment will have been created. You should activate the new environment with the following command.

<PrismSyntaxHighlighter
input={`my_env\\Scripts\\activate`}
language='bash'
matcher='my_env'
/>

The command prompt line should now be changed so that your virtual environment’s name is in parentheses at the front of the line, like so:

<Highlighter
input='(my_env) C:\Users\User\python-project>'
matcher='my_env'
/>

You have now successfully created and activated a virtual environment for your project.

## Step 6 — Write a Python program

In this section, we will cover how to write a “Hello, World!” Python program so that you can fully validate your installation. You should already be in the folder you want to be in with the virtual environment activated; if you are not return to [Step 5](#step-5--set-up-a-virtual-environment). 

From the command prompt, you can create a Python file by executing the following command. We’ll call our file `hello.py` for demonstration purposes, but feel free to use another name with the `.py` extension (which is necessary when writing a Python program). 

<PrismSyntaxHighlighter
input={`type nul > hello.py`}
language='bash'
matcher='hello'
/> 

Once issuing this command, you will have created an empty file called `hello.py` in your current working directory. Next, we will need to open the file in a text editor. There are many text editors out there, but for our purposes, we will use Notepad, which comes installed with Windows 10. To open the file in Notepad, type this command.

<PrismSyntaxHighlighter
input={`notepad hello.py`}
language='bash'
matcher='hello'
/> 

This should open up the Notebook program, along with a blank file called `hello.py` (or whatever you decided to name the program). Once you have your file, you can now write the “Hello, World!” Python program within the body of the text file. 

To do this, we will utilize the `print()` function to output a given string to the command prompt. The string we are passing into the print function will be `Hello, World!`. You can either surround your text by single (`'`) or double (`"`) quotes to signal that it is a string (ensure that these quotes are straight and not curly). Type the following into Notepad to write the “Hello, World!” program.

<PrismSyntaxHighlighter
input={`print("Hello, World!")`}
language='python'
/>

Once you have typed this program out, save the file by pressing `CTRL` + `S` on your keyboard to save the file. You can now run the “Hello, World!” program by running this command in your command prompt.

<PrismSyntaxHighlighter
input={`python hello.py`}
language='bash'
matcher='hello'
/>

Running this command in your command prompt should output the following.

<Highlighter
input={`Hello, World!`}
/>

Congratulations! You now have a working Python program running on your computer.

## Step 7 — Deactivate the virtual environment

If, at this point, you are finished working in Python, you can deactivate your virtual environment by typing the following.

<PrismSyntaxHighlighter
input={`deactivate`}
language='bash'
/>

This will return your command prompt to normal, without the `(my_env)` string preceding the path.

If you would like to activate the environment again, navigate to the relevant folder and run the `my_env\Scripts\activate` command again, ensuring that you are using the relevant name of the desired virtual environment.

## Conclusion

Now that you have completed this tutorial, you should have the latest version of Python running on your Windows 10 machine, pip installed, a virtual environment set up, and the tools you need to create and run Python programs. To learn more, you can read about programming with Python on [python.org](https://wiki.python.org/moin/BeginnersGuide), the official Python documentation.

Search open source code for Python with Sourcegraph to learn how others are using this language. Here are a few queries to get you started.

<SourcegraphSearch query="lang:python" patternType="literal"/>

<SourcegraphSearch query="def main(): lang:python" patternType="literal"/>

Check out our other Python tutorials on [Sourcegraph Learn](https://learn.sourcegraph.com/tags/python).

