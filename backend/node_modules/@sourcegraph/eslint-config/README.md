# @sourcegraph/eslint-config

[![npm](https://img.shields.io/npm/v/@sourcegraph/eslint-config.svg)](https://www.npmjs.com/package/@sourcegraph/eslint-config)
[![downloads](https://img.shields.io/npm/dt/@sourcegraph/eslint-config.svg)](https://www.npmjs.com/package/@sourcegraph/eslint-config)
[![Build status](https://badge.buildkite.com/78f62566cd542c6b903c4eb75aedf1ccc3340d381c2d4e1172.svg?branch=master)](https://buildkite.com/sourcegraph/eslint-config)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Shared ESLint config for Sourcegraph projects

## Install

```
npm install @sourcegraph/eslint-config
# or
yarn add @sourcegraph/eslint-config
```

Then add an `.eslintrc.json` to your project with

```json
{
  "extends": "@sourcegraph/eslint-config"
}
```

## Principles

Our lint rules are to help us write bug-free, readable and maintainable code.
Rules are usually added because the patterns they are checking for have been proven to be problematic
and frequently come up in code reviews.
The intention is to save both authors and reviewers time by providing the author early feedback at the time of writing.
Formatting concerns are intentionally left out and left to the code formatter of our choice, Prettier.

### Warnings

Some rules are configured as warnings. There can be two reasons for this:

- They are patterns that have too many existing violation in our code to roll them out as errors.
  Once those are removed, the severity will be changed to error.
- They are patterns that usually should be avoided, however have some exceptions.

Code authors are asked to double-check whether the violation is legitimate,
and either prevent it or add a comment for reviewers that justify the violation.

### When to use `eslint-disable`

Rules are not perfect and may sometimes flag false positives.
For these cases, and only these cases, there is `eslint-disable`.
Prefer keeping the disabled zone as small as possible (preferrably using `eslint-disable-next-line`).
When disabling a rule, it is a good practice to add an additional comment stating a justification why the rule is okay to be disabled there.
This saves a roundtrip in code review, as the reviewer would have to ask for the reason.
It also serves as information to future readers that this is an exceptional condition and should not be blindly copied somewhere else without verifying the same condition applies there.

When not to use `eslint-disable`: If you disagree with a rule (think a rule is more annoying than useful), please open an issue here to discuss changing the rule for all code, if there is consensus.

## TSLint

This ruleset replaces almost all of our TSLint config, however there is a handful of rules that have no equivalent in ESLint yet.
For these, it is recommended to run TSLint in addition to ESLint.
The package dist-tag `@sourcegraph/tslint-config@eslint` contains only the TSLint rules that are not yet in this ESLint config.

## Release

Releases are done automatically in CI when commits are merged into master by analyzing [Conventional Commit Messages](https://conventionalcommits.org/).
After running `yarn`, commit messages will be linted automatically when committing though a git hook.
The git hook can be circumvented for fixup commits with [git's `fixup!` autosquash feature](https://fle.github.io/git-tip-keep-your-branch-clean-with-fixup-and-autosquash.html), or by passing `--no-verify` to `git commit`.
You may have to rebase a branch before merging to ensure it has a proper commit history, or squash merge with a manually edited commit message that conforms to the convention.
