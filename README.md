# Sourcegraph Learn

Sourcegraph Learn is Sourcegraph's developer education hub and learning center.

Public URL: [https://learn.sourcegraph.com](https://learn.sourcegraph.com)

## How the site is built

- The website consists of static content generated using [Next.js](https://nextjs.org) and hosted on [Netlify](https://www.netlify.com/).
- The website code is written in TypeScript and React.
- The content is written in Markdown.

## Commands

Here are the available commands in this repository:

| Command              | Description                                                                                                                                                                                                                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nvm install`        | Use `nvm` to set up the project's recommended Node.js version. The version is specified [`.nvmrc`](./.nvmrc) and is automatically loaded by `nvm`. It is recommended to run this command once before running `npm install`. It requires the [`nvm`](https://github.com/nvm-sh/nvm) tool. |
| `npm install`        | Install dependencies. Run this once to set up the project, before running any other `npm` commands below.                                                                                                                                                                                |
| `npm run dev`        | Run the development server. Once running, it can be viewed at [localhost:3000](http://localhost:3000). The development server should automatically load your changes while you edit files.                                                                                               |
| `npm run build`      | Build the static site for production. This command exports the static site with `next export`. The output will be in the `out` directory. This is the build command which is run by the Netlify build process on every deployment (on production or on preview deploys).                 |
| `npm run prettier`   | Run the `prettier` formatter on the code to format it according to the formatting style.                                                                                                                                                                                                 |
| `npm run eslint`     | Run the `eslint` lint checker on the code to check for issues. See [`.eslintrc.json`](./.eslintrc.json) for the `eslint` configuration.                                                                                                                                                  |
| `npm run eslint-fix` | Run `eslint` with automatic fixes (with the `--fix` option). This will modify files, if automatic fixes are found. It's a good idea to run this command before committing changes.                                                                                                       |
| `npm start`          | _Not currently used_. This command is reserved for the dynamic version of the site which is planned                                                                                                                                                                                      |
| `npm run clean`      | Delete the NextJS cache and output directories (`.next` and `out`). If you are experiencing unexpected NextJS crashes, run this command to clean the cache.                                                                                                                              |

## Node.js version

The site requires Node.js. You can use [`nvm`](https://github.com/nvm-sh/nvm) to automatically use the version of Node.js which is specified in the repository's [`.nvmrc`](./.nvmrc) file:

```sh
nvm install
```

## How to run the site locally

Install dependencies and run the development server:

```sh
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to load the result.

## Configure the `pre-commit` Githook

To enable our pre-commit hook, update the following git config setting:

```sh
$ git config core.hooksPath .githooks
```

## Creating and editing content

To create a new post, create a new markdown file with the `.md` extension in the [`posts/`](./posts) directory.

At the top of the file, copy the following markdown block as a template to get started:

```md
---
title: Your Title
author: Your Name
tags: [your, relevant, tags]
image: headers/your-sourcegraph-learn-header.svg
description: Your description
---
```

More details about these fields are below.

## Markdown front-matter fields

The block at the top of each markdown file, delimited by `---` markers, is the front-matter data which is defined in YAML format.

The data fields that are supported in the front matter are:

| Field         | Type                       | Description                                                                                                                   |
| ------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `title`       | **string**                 | Title of the article, which is displayed in the `h1` tag and the html document title, and on the article's card.              |
| `author`      | **string**                 | Name of the author, which is displayed on the article page.                                                                   |
| `tags`        | **array of strings**       | List of tags which will be displayed on the article page and card. Each tag has an index page that lists all tagged articles. |
| `unlisted`    | **true** or **false**      | If true, the article will not be listed on index pages, and will only be accessible by direct URL. Default is false.          |
| `published`   | **true** or **false**      | If false, the article will not be listed or accessible on the website at all. Default is true.                                |
| `image`       | **string (relative path)** | Image to display in the article header, the article card, and social preview (unless overriden by `socialImage`)              |
| `socialImage` | **string (relative path)** | Image to use for social preview (`og:image` meta tag). If not provided, `image` is used.                                      |

In the website code, the front-matter data is accessible as the [`frontMatter`](./util/FrontMatter.ts) field on the [`MarkdownFile`](./util/MarkdownFile.ts) object.

## Deploy previews (staging branches)

When a pull request is created in this repository, Netlify will automatically build and deploy the branch. You can find the link to the deploy preview in the Checks section of the pull request.

## Building the production version of the site

When the site is being deployed to production, the following build command is executed and the output is in the `out/` directory.

```sh
npm run build
```

## Learn about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js/).

## Image conversion and optimization

We prefer to use SVG images when possible in order to limit file size and ensure our pages load quickly.
However, SVG images are not supported as a format for social previews (the `og:image` meta tag). To get around this, we convert the article images that are SVGs to PNG format and add the `socialImage` markdown front-matter field to point to the PNG url.

Social preview PNG images should be 1200x627 in size. This is already the target aspect ratio of the SVG headers that we use.

The tools to convert and optimize the images are included in the project dependencies so you can run them from the command line:

```sh
cd public/headers

# Example: convert an SVG header to a PNG at 1200x627 size
npx svgexport sourcegraph-learn-header.svg sourcegraph-learn-header.png 1200:627


# Optimize all PNGs in the directory in one command:
npx optipng-bin *.png -o7
```
