## Getting started with developing Sourcegraph Learn

### Node.js

First, make sure that you have Node.js installed. You can use [`nvm`](https://github.com/nvm-sh/nvm) to automatically use the version of Node.js which is specified in the repository's [`.nvmrc`](./.nvmrc) file:

```sh
nvm install
```

Alternatively, you can use [`n`](https://www.npmjs.com/package/n) to manage your Node versions. Use the following command to install the version of Node specified in the `.nvmrc` file:

```sh 
n <node version>
```

### Install Dependencies

This repository includes a bootstrap script, `./script/install.sh`, that is designed to get you up and running quickly. 

From the top level of the project, run the following command to install dependencies:

```sh
./script/install.sh
```
This script does two things:
- It installs the dependencies specified in the `package-lock.json` file with [`npm ci`](https://docs.npmjs.com/cli/v7/commands/npm-ci).
- It also creates a local `.env` file with environment variables for local development. 

### Running the Application

To run the application, type the following command from the top level of the project:

```sh
npm run dev
```
You can now navigate to `http://localhost:3000` to inspect the application in action.

## Commands

Below, please find a list of some of the other available `npm` commands not covered above:

| Command              | Description 
| -------------------- | -------------------------- | 
| `npm run build`      | Build the static site for production. This command exports the static site with `next export`. The output will be in the `out` directory. This is the build command which is run by the Netlify build process on every deployment (on production or on preview deploys).                      |
| `npm run prettier`   | Run the `prettier` formatter on the code to format it according to the formatting style.                                                                                                                                                                      |
| `npm run eslint`     | Run the `eslint` lint checker on the code to check for issues. See [`.eslintrc.json`](./.eslintrc.json) for the `eslint` configuration.         |
| `npm run eslint-fix` | Run `eslint` with automatic fixes (with the `--fix` option). This will modify files, if automatic fixes are found. It's a good idea to run this command before committing changes.                                                                                      |
| `npm start`          | _Not currently used_. This command is reserved for the dynamic version of the site which is planned.                                                                                                                                                                     |
| `npm run clean`      | Delete the NextJS cache and output directories (`.next` and `out`). If you are experiencing unexpected NextJS crashes, run this command to clean the cache.                                                                                                                              |

## Configure the `pre-commit` Githook

To enable our pre-commit hook, update the following git config setting:

```sh
git config core.hooksPath .githooks
```

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
