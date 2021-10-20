---
title: How to troubleshoot npm ERR! not found git
author: Akinleye Oyinbayode
tags: [tutorial, JavaScript, npm, troubleshooting]
publicationDate: October 20, 2021
description: Learn how to error handle npm ERR not found git
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-header.png
imageAlt: Sourcegraph Learn
browserTitle: npm ERR not found git, write in JavaScript error handling
type: posts
---

The `npm ERR! not found: git` is an error that occurs when you try to install an npm package. The error indicates that git is not installed in your system. This error can also be due to permission issues like not having administrator rights in your system environment. It can also be due to the path/system variable not set correctly


In this tutorial, we will help you figure out how to solve this problem.

## Reproducing the error 

To demonstrate the error, let us first reproduce it. Git is uninstalled on my system.

Let's open the command line interface, navigate to the specific folder and run `npm install <your package>`. 

If you are using VsCode, run `ctrl + shift + ~` on windows to open the terminal, navigate to your specific folder and run `npm install <your package>`

Now we see the error:

```
   npm ERR! not found: git 
   ENOGIT

```

Notice that I indicated above that i had uninstalled git from my system, that is why the above error is thrown during runtime. The error occured because NPM uses git to get the repos of the package you are trying to install.

Since we have now found the cause of the error, it is now time to spell out solutions to help us solve this error.


## Make sure git is installed on your system

Go to [git-scm](https://git-scm.com/downloads) and download git for your specific os (Linux, Windows or macOS). Specify the folder you want to install it.

Restart your terminal, go to the folder where you want to execute your code and run `npm install <Your Package>`

Now, npm should run smoothly and the package should be installed successfully.

## Set the path variable in system variables

Now, if you have git installed on your system but the error still persists, you may want to modify the `PATH` variable in environment variables.

Go through the following steps;

- Find the location where git is installed on your system. (mine is installed @ `C:\Program Files\Git\cmd`)
- Go to MY COMPUTER (Right click and click properties)
- Navigate to Advanced System Settings and click Environment Variables
- Navigate to System Variables and locate the PATH variable
- Click edit and enter your path e.g. (C:\Program Files\Git\cmd)
- Save and restart the IDE or Command Prompt (or Git CMD)

After following the above steps, on your terminal run `git --version`. It would display this `git version 2.33.1.windows.1`

You can then go ahead and install the package again, it should work this time
## Run your CMD/IDE as administrator

Lastly, in case the two solutions above did not work for you, this should most likely solve the problem.

Running as an administrator aloows you to change some parts of your machine's operating system that can be damaged by unintended mistakes/errors or malicious activities.

Running the CMD/IDE as an administrator will grant you exclusive rights to modify.

- Navigate to where the icon of the application is
- Right click and select 'run as an administrator'
- run the code again `npm install <your package>`

It should now run as intended.


## Learn more

Search across open source JavaScript repositories that have the `npm ERR! not found: git` to understand the message more.

<SourcegraphSearch query="npm ERR! not found: git" patternType="literal"/>

Check out more Sourcegraph Learn tutorials on [JavaScript](https://learn.sourcegraph.com/tags/javascript).