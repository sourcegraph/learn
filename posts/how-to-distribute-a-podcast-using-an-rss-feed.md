---
title: How to distribute a podcast using an RSS feed
author: anthony-tagliaferri
tags: [podcast, RSS, object storage]
publicationDate: October 18, 2021
description: Set up an RSS feed for your podcast
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-07.png
imageAlt: Sourcegraph Learn
alternateTitle: Distributing tech podcasts with RSS on Spotify
type: posts
---

With tech-focused podcasts increasing in popularity within the developer community, it is valuable to know how to distribute one effectively. It is imperative to be able to reach listeners through platforms such as Apple Podcasts, Google Play, and Spotify. 

In this tutorial, we will use the example podcast, _The Open Ollie Show_, which is about all things open source hosted by Ollie, the open source kitty.

We will first walk through hosting the audio files for each episode on a cloud object storage service, for us to include in the RSS feed we create. Then, we will write the RSS feed line by line using XML, bringing our episodes together and providing various data for platforms to use. Finally, we will validate the RSS feed and submit it to Spotify so that we can distribute our tech podcast using their platform in order to reach our listeners.

## Prerequisites

In order to follow the steps of this tutorial, you should have the following:

* One or more episodes recorded, edited, and ready to be published to the public as an MP3 audio file.
* Server space which will host the audio files for each episode. We recommend using a cloud object storage service that is S3-compatible and has a CDN.
* An image (sized between 1400x1400 pixels and 3000x3000 pixels) that will serve as the podcast’s logo.

With these prerequisites in place, let’s begin. 

## Step 1 — Uploading audio files to object storage

We will begin by uploading our first episode’s MP3 audio file to our cloud object storage. You can use any cloud data store that makes sense for you, we’ll be using an S3-compatible storage. If you already have your file uploaded in a publicly-accessible data store with CDN, feel free to skip this step. We’ll be demonstrating how to do this with the S3-compatible buckets available via Google Cloud Platform and DigitalOcean. Feel free to use an alternate provider, the steps may differ across hosts, so be sure to follow recommended practices from their respective official documentation. 

### Uploading a podcast MP3 to Google Cloud Platform

For this tutorial, we created an `open-ollie-show` bucket on Google Cloud Platform Cloud Storage. If you need help setting up and uploading files, review this [tutorial on uploading objects to Cloud Storage](https://cloud.google.com/storage/docs/uploading-objects). 

From your bucket’s main page, choose whether you want to put your file in your root or other directory, then navigate there. We called our file `episode1.mp3`. From the directory you want to upload the file to, select the **Upload Files** link or else drag and drop your file into the bucket. 

Click on the `episode1.mp3` file that you just uploaded and copy the link given next to **Public URL**. Now that we have our file’s URL saved we can go ahead and begin writing our podcast’s RSS feed.

### Uploading a podcast MP3 to DigitalOcean Spaces

For this tutorial, we created an `open-ollie-show` Space on DigitalOcean. If you need help setting up a Space, review this [DigitalOcean Spaces tutorial](https://www.digitalocean.com/community/tutorials/how-to-create-a-digitalocean-space-and-api-key).

Starting on the **Files** tab on our Space’s web page we will press the **Upload Files** button and select our MP3 file from our computer. When asked to set the file as privately or publicly readable, select *Public* so that listeners will be able to stream our audio file.

The file we uploaded was named `episode1.mp3` to make it easier to reference when writing our RSS feed. We can always rename any file we upload by pressing the **More** dropdown on the file we want to rename.

We will need to save the link to our first episode’s file for later by hovering over the file and pressing **Copy URL**. Our Space has CDN enabled, so we will copy our Edge URL. That said, the Origin URL would also work. Now that we have our file’s URL saved we can go ahead and begin writing our podcast’s RSS feed.

## Step 2 — Writing the RSS feed


Next, we’ll be creating our RSS feed. You can title your RSS feed after your podcast. In our example podcast, we’ll call it `open-ollie.rss`.
RSS feeds are written within an XML document. Therefore, we will begin by writing an XML declaration followed by an opening and closing RSS tag in which we will define our XML namespace.

<Highlighter
input={`<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xml:lang="en" version="2.0">
   
</rss>`}
language='xml'
/>

The first line in our code above is our XML declaration. 

The second line is our opening RSS tag which will include all of our content and, consequently, the rest of the code we write throughout this tutorial. Within this opening tag we defined our XML namespace using the “xmlns” attribute. Because this RSS feed will be used for a podcast, we declared that we will be using the iTunes podcast namespace which is a generic namespace useful for platforms such as Apple Podcasts, Google Play, and Spotify. Without this, many other tags we define will not be parsed correctly.

Next, let’s define our podcast show using the `<channel>` tag as shown in the XML below.

<Highlighter
input={`<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xml:lang="en" version="2.0">
    <channel>
        <title>The Open Ollie Show</title>
        <link>learn.sourchegraph.com</link>
        <description>A podcast about open source repositories hosted by Ollie the Open Source Kitty.</description>
        <language>en</language>
        <itunes:image href="https://i.imgur.com/zvFIqdf.png" />
        <itunes:author>Open Ollie</itunes:author>
        <itunes:owner>
            <itunes:name>Open Ollie</itunes:name>
            <itunes:email>OpenOllie@email.com</itunes:email>
        </itunes:owner>
        <itunes:explicit>no</itunes:explicit>
        <itunes:category text="Technology"/>
   
    </channel>
</rss>`}
language='xml'
/>

The following tags are used to help describe our podcast further:

| Tag | Description |
|---|---|
| `<title>` | The title of our podcast show, this is separate from the titles of each episode |
| `<link>` | A link to our podcast, this can be a seperate website, or a link to the Spotify page or anywhere else we decide to distribute our podcast |
| `<description>` | A sentence or two describing what our podcast is about |
| `<language>` | Specifies the language we will be speaking in our podcast, in this case it’s `en` for English, you can find the relevant two-letter language code relevant to you in the [ISO 639.2 standards document](https://www.loc.gov/standards/iso639-2/php/code_list.php) |
| `<itunes:image>` | The logo of the podcast (this must be between 1400x1400 pixels and 3000x3000 pixels) |
| `<itunes:author>` | The publicly displayed author or host of the podcast |
| `<itunes:owner>` | The name and email of the owner of the podcast which is kept private and may be used in case Apple, Spotify, or any other platform needed to contact us |
| `<itunes:explicit>` | Set to `yes` if any vulgar language is used throughout our podcast and `no` if no vulgar language is used |
| `<itunes:category>` | Which category Apple Podcasts would put our podcast under if we choose to distribute using their platform; see a [list of available categories via Apple](https://help.apple.com/itc/podcasts_connect/#/itc9267a2f12) |


Now, it is time to add our first episode to our podcast which we will do using an `<item>` tag. All episodes we define will be inside of their own `<item>` tag and because this can get messy once you have multiple episodes, we will be using line spacing and comments to help us keep this straightforward to read for ourselves and anyone else who looks at our RSS feed in the future.

Starting two lines below our `<itunes:category>` tag, as shown below, we will begin to define our first episode.

<Highlighter
input={`    <channel>
        ...
        <itunes:category text="Technology"/>
           
        <!-- EPISODE 1 -->
        <item>
            <title>Episode 1: Life as a Keyboard Cat</title>
            <description>Ollie the Open Source Kitty discusses their approach to programming open source software with their paws.</description>
            <link></link>
            <enclosure type="audio/mpeg" url="https://sammys-podcast.nyc3.cdn.digitaloceanspaces.com/episode1.mp3"/>
            <guid isPermaLink="false">dcc051a2-adc9-4e6e-9fd3-ecbec2f7cf72</guid>
   
        </item>
    </channel>`}
language='xml'
/>

We begin by defining the title of this podcast episode as shown above using the `<title>` tag along with a brief summary of the episode using the `<description>` tag.

Next, we use the `<link>` tag to either link to the podcast episode hosted on an external site or input the url to the MP3 file on our Space (this option being the one we chose for The Open Ollie Show). This is followed by the `<enclosure>` tag which is where Spotify will pull our episode’s MP3 file for listeners to stream. The `type` attribute is used to specify that we are providing an MP3 file and the `url` attribute is the episode file’s URL which we saved earlier from uploading our MP3 to our Space.

Finally, we set a global unique identifier using the `<guid>` tag. This is to make sure that if we ever change the title of this episode, Spotify will be able to understand that we are only changing the title of an existing episode instead of making a whole new episode that has the same audio file. We used an online UUID generator in order to get a random string that we will use as the unique identifier. Because this is not a permalink to our podcast, we will set the `isPermaLink` attribute to false.

Let’s finish defining the rest of our first episode.

<Highlighter
input={`   <channel>
        ...
        <!-- EPISODE 1 -->
        <item>
            ...
            <itunes:duration></itunes:duration>
            <itunes:author>Open Ollie</itunes:author>
            <itunes:explicit>no</itunes:explicit>
            <itunes:season>1</itunes:season>
            <itunes:episode>1</itunes:episode>
            <itunes:episodeType>full</itunes:episodeType>
            <pubDate>Wed, 1 Jan 2020 12:00:00 +0000</pubDate>
        </item>
    </channel>`}
language='xml'
/>

Now that the initial XML declarations are complete, we have now set a few extra variables which are explained below.

| Tag | Description |
|---|---|
| `<itunes:duration>` | The duration of our episode in seconds |
| `<itunes:author>` | The author or host of this specific episode, notice this can be different from the overall show author |
| `<itunes:explicit>` | Whether or not this episode uses any vulgar language, notice this is also different from the overall show setting |
| `<itunes:season>` | In case you ever want to have multiple seasons for your podcast it is good to specify a season for each episode, even if it will always be season 1 |
| `<itunes:episode>` | Which episode number this is for the aforementioned season number |
| `<itunes:episodeType>` | `full` specifies that this is a full length episode; we can also use `bonus` to specify this as bonus content which is separate from our regular episodes. Bonus content can have the same season and episode number as a full episode. This is useful if our bonus content is a clip from a longer full episode |
| `<pubDate>` | Used for ordering our podcast episodes, the date above sets this episode’s publish date and time to Wednesday, January 1st, 2020 at noon UTC |


At this point, we can save our XML RSS feed file and submit it to our distributors.

## Step 3 — Submitting the podcast for review on Spotify

Now that we have created our RSS feed and uploaded our first episode and RSS feed to our cloud object storage bucket, we can submit our podcast and its first episode to Spotify for our listeners to enjoy.

Start by creating a [free Spotify account](https://accounts.spotify.com/en/login?continue=https:%2F%2Fpodcasters.spotify.com%2Fgateway) if you do not have one already. To keep things intuitive, we will use the same email for the Spotify account that was used in the `<itunes:email>` tag in the RSS feed.

Next, we will go to [Spotify’s podcast submission page](https://podcasters.spotify.com/submit) and press *Get Started* followed by pasting the link to our RSS feed hosted on the cloud of our choice in the *Link to RSS feed* field that we discussed in [Step 1](#step-1--uploading-audio-files-to-object-storage).

All that is left is inputting our podcast’s details including category, language, and country, and finally reviewing our podcast’s information and submitting our podcast.

## Next steps

Once you have everything set up for your RSS feed, you can focus on recording your podcast! If you would like to learn more about RSS for podcasters, you can review Apple’s [A Podcaster’s Guide to RSS](https://help.apple.com/itc/podcasts_connect/).
