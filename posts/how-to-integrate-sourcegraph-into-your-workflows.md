---
title: How to integrate Sourcegraph into your workflows
author: marek-zaluski
tags: [video, sourcegraph, editor, ide, git]
description: Learn how to switch between your code host (like GitHub), code editor or IDE (like VS Code), and Sourcegraph.
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/how-to-integrate-sourcegraph-into-your-workflows-thumbnail.jpg
alternateTitle: Integrating Sourcegraph into code host and editor workflows
type: posts
---

<EmbeddedYoutubeVideo id="1qa3dyzJ3Go" />

## Learn more

- Install the [Sourcegraph browser extension](https://docs.sourcegraph.com/integration/browser_extension)
- Learn about the [“Git Extras” Sourcegraph extension](https://sourcegraph.com/extensions/sourcegraph/git-extras)
- Learn about [Sourcegraph extensions for your code editor](https://sourcegraph.com/extensions?category=Code+editors)
- Watch the video: [Open-in-editor Sourcegraph extension](https://youtu.be/Maa6jCaoZFw)

## Transcript

As a developer, I spend most of my time either in my code editor — for me, usually that's VS Code — or on GitHub, reviewing pull requests or browsing repositories. Whenever I switch between different tools, I don't like it when I lose my train of thought, and I don't like it when I lose the context of the files that I'm working on.

My name is Marek. I'm an engineer at Sourcegraph. Let me show you how I use Sourcegraph on a day-to-day basis in my own work in a way that helps me read and understand code better without losing context as I switch between tools.

My starting point is usually on GitHub. Often, I'm reviewing a pull request or just trying to understand how some piece of code works. By installing the Sourcegraph browser extension, I can have Sourcegraph features right in Github. Here, by hovering over a symbol in Github, I'm able to get Sourcegraph code intelligence right where I am.

Now, I can use the **Find references** button here to jump into Sourcegraph and start exploring the code. The bottom panel is the **References** panel, and it's listing all the places where this particular token is being used in this codebase. If I want to learn more about the context of this particular piece of code, I can use the **Git blame** action to show the history of the changes made to it and why they were made.

Often my workflow involves collaborating with other engineers. I can copy this link to this particular place in the code and share it with my colleagues on Slack. Because this is a public repository, Sourcegraph generates a preview image that helps me show what I'm linking to.

Typically after I've explored and learned about some code, my next step is to jump into my editor and make some changes. I can do that with the **Open in VS Code** action here. Now I've already configured Sourcegraph to point to my local repository. By clicking the button, I'm taken to my editor, and I'm able to start working right away.

Sometimes while I'm coding, I'm curious to learn more about a particular symbol that's in the code, like this `configurationResolver`. With the Sourcegraph VS Code extension, I can jump right into a Sourcegraph search and find out more.

I probably switch between my editor, GitHub and Sourcegraph multiple times a day. So I love having integrations that make that as smooth as possible. Now, let me show you how you can set up these integrations for your own workflow.

First, install the Sourcegraph browser extension. It's available for Chrome, Firefox, and Safari. Next, install the Sourcegraph extension for Visual Studio Code. And finally, to be able to jump from Sourcegraph right into your editor, go to the Sourcegraph extensions page and go to the **Code editors** section, you'll find our integrations for VS Code as well as several other editors. And you just have to add the local directory where you have your repositories cloned in the Sourcegraph settings for this to work.
