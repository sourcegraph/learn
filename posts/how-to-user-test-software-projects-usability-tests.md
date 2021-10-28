---
title: How to user test software projects — designing and conducting an in-person usability test 
authorSlug: shaili-shah
authorDisplayName: Shaili Shah
tags: [user testing, UX, software lifecycle, tutorial]
publicationDate: September, 25, 2021
description: User research and usability testing are important aspects of the software development process, this tutorial will guide you through the steps you need to take for a usability test on your software
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-08.png
imageAlt: Sourcegraph Learn
browserTitle: UX research for developers
type: posts
---

Usability testing helps a team observe, understand, and draw insights from a user’s ability to complete a key set of tasks on their software product. It helps teams figure out if their target user can use their product, if users can navigate the key steps and processes involved, and if the user experience is accessible and seamless. Most importantly, through testing, developers and designers can identify usability issues and determine how to fix them. 

Usability testing is ideally conducted as part of the design phase while the prototype is still being tested and reiterated. This is a different process than User Acceptance Testing (UAT), which occurs near the end of development or shortly before deployment, and is a final check not often conducted on real users. 

This tutorial will focus on how to design and conduct an in-person usability test using a qualitative approach. This approach is relatively inexpensive and is more accessible for those who haven’t had training in formal scientific methods. In-person testing helps you find out whether the prototype works as intended, and it allows you to watch and talk to a user as they navigate the prototype. This method also provides considerable data to inform design and to translate these findings into improvements that address usability issues. 

## What you need

To begin the process, you’ll need the following:
* A prototype with a process that a user can test (this can be anything from a paper prototype to a full-fledged app)
* A target user group which we will describe in more detail below 
* A location to conduct usability testing 

In terms of materials, you should have the following:
* Recording equipment (either audio or video)
* Release forms
* Materials to take notes and synthesize results
* Compensation for participants

With these addressed, you are ready to continue.

## Step 1 — Identifying the project goals and users

First, you need to identify your goal by selecting a design or process that you want to test. 

For example, if you’re testing an image-sharing social media website that allows users to search, pin, and share content from other websites, a goal may be to identify whether users can easily navigate the homepage and search features. If you’re testing a mobile application like a rideshare app, your goal may be to find out whether users can successfully book a ride on an app. 

Next, you need to determine the target audience that your application serves and what problems it solves for them. For projects that may appeal to diverse audiences, focus on the type of person who may most benefit from your software. 

For instance, to test a rideshare app, you can try to find the type of user who fits a profile similar to the following:
* Does not own a car
* Lives in a city
* Tends to rely on public transportation often or daily

These users may have specific insights or problems you wouldn’t have known about had you only tested the general public without considering these parameters.

With our goals and users identified, we can continue to the planning stage.

## Step 2 — Planning the test

Now that you have narrowed down the scope of your test in terms of goals and users, you can move onto planning exactly what tasks you’ll ask the users to complete on your application design. The tasks should be relevant to a user’s needs and desires when using your app. 

If it’s a webapp, you can start by asking the testers to review the homepage and answer the following questions:
1. What are your thoughts?
1. What are you looking at?
1. What do you think you can do on this webapp?
1. What is the purpose of this webapp?

Next, you can ask the testers to walk through a task that best corresponds to your objective. Make sure you have planned for alternate paths and pages if a user goes in a different direction than intended. 

To return to the social media example: if you’re testing the search features, have participants search for content they’re interested in. If you’re interested in finding out if the content is easily shared, ask them to create, upload, and share a particular post or image. 

Consider coming up with a scenario or context to help guide the user if your website requires navigating complex information, such as a healthcare provider website or a process with many requirements: “You are a U.S. citizen looking for a marketplace health insurance plan, you’re single and live on your own, and you make $40,000 a year. Navigate this quiz to identify which plan best suits you.” Providing contextual information can help you standardize the results of the user test. 

To assess the success or failure of a task, decide on a number of tries or prompts before it’s marked as an issue. This will help you analyze the results later.

## Step 3 — Recruiting participants and setting up

Make a list of the characteristics of your target users for your usability test that you have identified in [Step 1](#step-1--identifying-the-project-goals-and-users). Then, translate these characteristics into specific, measurable criteria to use to identify those people. For example, if your aim is to test your design with “frequent social media users,” you may decide that this means they share content on a particular platform at least twice daily. 

Based on your target audience, create a screener questionnaire so that you can quickly figure out whether potential participants are a good fit for your test. Write questions that address each point in your criteria, without being overly specific. For example, a good question may be to ask about other social media platforms, such as “How often do you share content on TikTok or Instagram?” If there are any people who don’t fit your audience, identify their qualities (such as their age range, occupation, or if they don’t work in the discipline that the site is designed for) and write questions that help you filter out these individuals. 

Find at least five users (per test group, if you have more than one target user group). You can search for participants in industry-specific groups or online posting platforms like Craigslist or Facebook. Be clear and upfront about the time commitment. Consider testing with colleagues and friends first to see if there are any major issues before refining the test. Then, schedule testing sessions with all participants and collect their names, email addresses, and phone numbers. 

Choose a form of compensation or incentive for participants: for instance, you can offer payment or gift cards, a discounted rate for your product or service, or access to a premium service. 

Finally, decide on where to conduct the tests. You can do guerilla usability testing in high-traffic locations like shopping malls, or you can do more planned tests in a conference room or office, or another relaxed setting where you would naturally find users of your application. Make sure there are no distractions, and that you can sit with participants while they test out the prototype. To record the tests, make arrangements for any audio or video equipment needed. 

## Step 4 — Writing a discussion guide 

It’s important to write both an interview script for the test facilitator and a set of instructions for the participants so that everyone receives the same test. You will also need to write a consent form to record participants, which you should distribute before the test. 

The interview script starts with asking background questions, then walks the participant through the tasks, and ends the test with some wrap-up questions to understand the user’s overall experience of the task, their satisfaction level and sources of confusion or frustration. The instructions for the participants take the participants through the tasks step by step. Below is a template with some questions to ask for each part of the test session. 

---
**Introduction**
1. Introduce yourself. 
2. Ask basic questions and chat to get to know a participant. 
3. Assure the participant that this is just an informal feedback session, that there are no right answers, and that they can’t do anything wrong. 
4. “Are you familiar with [a relevant topic, project, or tool]?” 

**Introduce the prototype.**
1. Ask what they think this app is for, whether they have background knowledge on related topics. 
2. Optionally ask other more specific questions about apps they use, the value they find in those tools, or about any experiences they’ve had using similar tools.
3. “Do you have any questions before we begin?”

**Walk-through of the prototype**
1. “What do you think of the layout or design of this app or page?”
2. Encourage them to think out loud as they go through the test so that you can understand every step in their thought process. 
3. Ask them to consider the first task, “What would you click on first?”
4. If you notice any unexpected behavior, you can observe this out loud and say, “That’s interesting. Can you tell me why you clicked on X or chose Y?”
5. If they ask questions or seem unsure about a task, ask them to articulate why. “What do you think you would do if you were to use this app in real life?”
6. If there are multiple ways of completing the task, ask if they see any other ways of doing so.

**Wrap-up**
1. Tell the participant that they’ve finished the test, and thank them for their very helpful feedback. 
2. Ask about what they enjoyed or disliked about the design and overall prototype. Alternatively, you could offer a short survey asking them to rate their level of satisfaction and frustration with the prototype. You may ask participants to rate statements on a scale of 1-5; for example, “The task was easy to complete” or “The task was too complicated.”
3. Follow up with a thank you email and their compensation or gift. 
---

This script will allow you and any other testers to have a standardized approach, and for participants to have a standardized experience. 

When writing a script, following the following guidance can help it be effective:
- Be concise and specific. Don’t use extra wording, because it may make the process seem intimidating or off-putting to the participants. 
- Reassure participants that you are testing the product and not their skills or intelligence.
- Remain neutral and don’t try to direct them or offer hints. 

For an example of a discussion guide, review this [conversational script](https://audioweb.sitehost.iu.edu/T284/krug_questions.html) from Steve Krug.

## Step 5 — Facilitating the test

A facilitator of a usability test observes the participant for any insights while remaining as non-interfering as possible. During the test, remind participants to verbalize their thought process if they fall silent; tell them that it’s important to know their thoughts as they go through the tasks to understand their perspective. 

The key things to observe during the test are: 
- How successfully a user can complete a task
- How often participants ask questions or seem hesitant or confused
- How satisfied the user seems with the experience 

Begin recording the test before you start the introduction portion, and take notes on what users say during and at the end of the test. You may want to collect these statements if you need to create a report — these are like abbreviated case studies that help you justify a redesign, if one is needed. 

If your prototype breaks some conventions in its text or design elements (such as an unusual menu icon or a different phrase for the “About” page), notice if users find this confusing or unclear. 

## Step 6 — Analyzing the results

Once you have your data from the test in the form of notes and/or recordings, it’s time to synthesize your findings. 

Start by reviewing the recordings and notes: all the positive feedback and user frustrations, their questions and hesitations, suggestions or comments. What went as expected and what didn’t? Try not to be too attached to any ideas of how you think the prototype should work. 

Then, record how many of the 5 test participants understood the design, clicked on the appropriate things, and completed the entire process. Write each piece of feedback or specific error onto individual sticky notes. Also write down any issues that came up, the type of error it was, any workarounds, and whether the issue is a serious obstacle in user satisfaction. 

Next, sort the sticky notes into groups based on similarity or theme in order to create a visual organization of your results. If you’re presenting your findings, you can also write a summary of key points or organize this information into a chart, bar graph, or another medium so that you can identify relevant patterns. 

Finally, discuss the most important themes you observed with your team. Identify a few key things to change in your next iteration.  

---
**A note on prioritizing issues:**

Evaluating the errors and the feedback you get depends on the type of application and what a user’s priorities are while using it. If some features could have serious consequences (affecting sales of a product, or leading to specific health outcomes due to your project being a healthcare app), make sure to mark any user frustrations or confusion that arise while testing. 

---

To return to our earlier examples — if you’re testing a state healthcare website, the tasks that are confusing or difficult to complete could have serious consequences for people, so it’s best to focus on making the website as clear and simple to use as possible. But if you’re testing a social media platform, it may be easy for users to complete a task, but because it’s not the only platform available, the design elements and seamlessness of the experience are just as important to become more widely adopted. So in this case, it’s better to focus on what testers find appealing or unpleasant about the design rather than just functionality.

## Step 7 — Making recommendations and improvements

To brainstorm potential improvements to your prototype, start with reviewing your team’s list of things to address from the previous step. Write down all the ways you might change your design, and don’t censor your ideas: at this stage, the point is to generate as many options as possible. 

If you get stuck, search for inspiration for potential solutions by researching other successful applications; what are their user flows or functionality that’s relevant to your app, even if it’s for a totally different service or product. 

Then, outline or sketch out new user flows to help you visualize the changes. 

In our Pinterest example, one issue could be that the search function only allows users to find content that’s tagged with the exact same search term they used, and not also related search content that other users may search for. The user could find it difficult to search for and share content widely, because the search results could be too narrow or limited. As a result, you may consider creating a tagging function that would help you expand your search results. You could also take inspiration from websites that display related searches of other users.

Lastly, assess which solutions generated best fit your original objectives for the test. Keep in mind that good changes resolve multiple issues when possible, are actionable and easy to understand, and use clear and concise language. Try to ensure that all the people who could potentially use your software will be satisfied with the changes. 

After implementing your changes, conduct another round of research to figure out if other issues were hiding under old issues or new issues were created by the new design. You may need to do this process a few times before you’re happy with the changes. 

## Conclusion

This tutorial outlined the main steps for creating and implementing an in-person usability test, along with key criteria and points of consideration to help you generate a test that works for your unique product and your project objectives. While the tools and programs used by user experience designers may change, a usability test is a rewarding practice that ensures your application is made with your target user’s needs in mind.

