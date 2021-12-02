---
title: How to create user flow diagrams for software products
authorSlug: shaili-shah
authorDisplayName: Shaili Shah
tags: [tutorial, UX, User Testing, Software Lifecycle]
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-01.png
publicationDate: December 1, 2021
browserTitle: "UX: Map out user flow diagrams"
description: A UX primer for creating user flow diagrams for your app or website
type: posts
---

A user flow diagram describes a sequence of actions a user takes from their first interaction with your software project to their last step using your product, app, or website. The user flow diagram helps developers break the overall design of the product down into specific interfaces as well as determine user requirements. 

It’s also useful for identifying gaps or errors in other products or versions of the software project. Having a complete user flow makes sure that all the actions a user might need to do are accounted for in the interfaces presented. It ensures a user is empowered with all the options, screens, and information they need to successfully complete the interaction, as well as the error pathways and ways to redirect the user to the appropriate screens or actions. 

While a user journey helps contextualize the use of your product by focusing on a user’s motivations and desires and overall product experience, a user flow is more technical: it’s specifically focused on physical actions once a user begins using your product. It’s good to have your user journey map and persona on hand, because they help you keep the big picture in mind while you imagine how a user might make decisions while they use your product. It also saves a lot of time and money if you can sort out the flow in a lo-fi way before beginning to design and code.

## Prerequisites

Before diagramming, you’ll want to have the following assets in hand or mapped out.

* User persona(s)
* Market research and competitor analysis
* User journey map
* [Wifeframes](/how-to-wireframe-a-software-product) — optional depending on where you are in the process

If you need to learn more about any of these, feel free to review our [UX tutorials](/tags/ux). 

## Step 1 — Identify a user scenario 

You can start your user flow diagram process by identifying a scenario where a user might use your software and determining what their goal is in using the product. 

There may be many ways a user could decide to use or find their way toward your product or website. So you want to ask yourself, how does this user find their way to your product or website, and what do they expect and want from the experience? What are they seeking to find out or hoping to accomplish by the end of the interaction? 

To use an example, a user on a job search app may be looking for a certain type of work, and that would influence what information they look for at first glance of the app or website. This situation is likely different from what someone posting jobs on that app would be expecting, they may be surfaced different information or options. Each user flow should represent one user group and one goal, since even one user may consider multiple options causing the flow to become overly complex and messy.

## Step 2 — Decide on how to represent each decision point

Next, you will decide on the symbols and colors you’ll use for each decision point in the flow. This will help you stay consistent on what elements mean what interactions or types of input. Try to be as precise and concise as you can when labeling each element. The elements you use will consist of shapes, lines, and colors. You will want to use some combination of shapes representing interactions, colors representing parts of the process or perhaps different paths within the flow diagram, and arrows that indicate the direction or the sequence of screens/interactions.

There are various [types of charts](https://bootcamp.uxdesign.cc/how-to-create-user-flows-in-an-easy-way-80ad394f5ad8) that you can use:

* Chart flow  — using the symbols and lines describe above
* Text flow  — describing the actions and decisions a user makes using words and arrows
* Wire flow — sketching wireframes of each interaction/decision point

The type of chart you draw depends on what is most practical for your project.

## Step 3 — Break down user goal into series of tasks

At this stage, you will work to break the user’s goal down into a series of tasks or steps toward completing a set of tasks. 

Find your entry point first. A user flow diagram begins with what brings your user to your project, and the first screen or touch point your user sees. 

Then, based on the goal you identified earlier, what are the next pieces of information and the next interactions the user needs to move from this screen to the next step, and then the next? What are different options this user considers? 

There are at least a few ways to sequence the steps, but for now all you need to do is write down the most obvious steps in the process or decisions a user makes at each screen to accomplish their goal, without worrying about the details right away. It may help to write it out in phrases or sentences before you begin sketching the flow. 

Here are some questions to help you identify and organize these steps without missing anything:

* What information does your user need at each screen to move forward?
* What does the user expect to find at each screen? Are there certain conventions that are helpful to follow, such as a common flow to user onboarding?
* What decisions are made at each screen or touchpoint? 
* Are there related or similar experiences in other software products you’ve come across that you can base this user flow on or use as a point of comparison?

Once you ask these questions, and break the steps down, you are ready to consider pathways that may lead to errors.

## Step 4 — Identify possible error pathways

In the previous step, we identified ways a user would successfully move toward their goal at each screen. What are the ways they may go off course? What other decisions could they make at each screen that would lead them to irrelevant pages for them? 

For instance, an option for one user group on one screen may not be relevant to another type of user, but they may select that option anyway. Include some pathways for them to be redirected toward the appropriate action, or a check-in message. For example, you can display `You left something in your cart` or a similar message that suggests that they didn’t finish completing a task.

Being able to troubleshoot the user flow in the diagramming stage can work to prevent creating errors during the more expensive development stage.

## Step 5 — Use a program to build a prototype you can share with your team

After you’ve sketched out your user flow, you could use a program that allows you to share it with your team so you can collectively work out the details of the user experience. Sometimes it’s more helpful to convey individual user flows for specific tasks instead of presenting the big picture right away so that you don’t get lost in the details. At other times, the big picture is needed. So you can use your judgement with this.

If you do need to create a big picture map of your user experience, there are many [programs and diagramming tools](https://ipsnews.net/business/2021/06/07/what-are-the-best-user-flow-tools-for-ux-design-in-2021/) that can make this easier for you. Below are a handful of options:
[Cacoo](https://cacoo.com/)
[Sketch’s User Flow plugin](https://abynim.github.io/UserFlows/) 
[Miro](https://miro.com/templates/user-flow/)
[Figma](https://www.figma.com/templates/flowchart-maker/)
[Overflow](https://overflow.io/)
[Lucidchart](https://www.lucidchart.com/pages/)

If you’ve already made some [wireframes](/how-to-wireframe-a-software-product), you can now combine them with your user flows to show how a user would move to each screen from beginning to end. [Wireflow](https://wireflow.co/) is an example of a program that helps you model this quickly. 

## Step 6 — Revise your user flow as you design, reiterate, and test your software project

As you start designing or testing your prototype, you’ll start collecting feedback that could help you clarify your user flow. Again, it’s not always necessary to have a large map of the user flows, especially if your software project involves long, complex interactions, so it may be best to focus on one goal at a time and use whatever style of user flow diagram is the most direct communication tool at the time. 

## Further reading

To learn more about user flow diagrams, you can review the following articles:
* [Bootcamp, How to create user flows in an easy way](https://bootcamp.uxdesign.cc/how-to-create-user-flows-in-an-easy-way-80ad394f5ad8)
* [Digital Natives, User Journey Vs User Flow](https://www.digitalnatives.hu/blog/user-journey-vs-user-flow/)
* [CareerFoundry, How to create a user flow](https://careerfoundry.com/en/blog/ux-design/how-to-create-a-user-flow/)
* [IPS News, What are the best user flow tools for UX design in 2021](https://ipsnews.net/business/2021/06/07/what-are-the-best-user-flow-tools-for-ux-design-in-2021/)

A user flow diagram is a useful communication tool that allows designers and developers to create a seamless user experience of their software product. It can be a general, lo-fi sketch, or it can be a more sophisticated visual map of how the user moves from one screen to another to reach their goal, all based on how complex your software project is and what needs to be communicated between team members. 
