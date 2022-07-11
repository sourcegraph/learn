---
title: Learning React concepts with Sourcegraph
tags: [tutorial, React, Sourcegraph]
authorSlug: prosper-otemuyiwa
authorDisplayName: Prosper Otemuyiwa
publicationDate: November 23, 2021
description: Search across code with Sourcegraph to learn React
image: https://storage.googleapis.com/sourcegraph-assets/learn/headers/sourcegraph-learn-13.png
imageAlt: Sourcegraph Learn
alternativeTitle: How to use Sourcegraph code search to learn React
type: posts
---

React, also known as ReactJS or React.js, is a popular front-end JavaScript library that helps developers build user interfaces. 

There are many ways to learn React, including via the [official Learn React docs](https://beta.reactjs.org/learn). In this tutorial, we will support you in beginning to learn this library through using [Sourcegraph](https://sourcegraph.com). Sourcegraph enables you to search across open source code written in React so that you can delve into foundational concepts that are crucial to being able to implement React effectively.

We’ll be using [Sourcegraph Cloud](https://sourcegraph.com) throughout this tutorial, which you don’t need an account to use. If you would like to [create an account](https://learn.sourcegraph.com/how-to-create-a-sourcegraph-cloud-account) to save your search history or learn more about the tool, feel free to review our [Sourcegraph Cloud tutorials and videos](https://learn.sourcegraph.com/tags/sourcegraph-cloud). 

## Forms

Many front-end developers will need to build web forms to intake information from users. React provides a built-in way to work with [forms using controlled components](https://reactjs.org/docs/forms.html), but there are a number of React form libraries that can provide you with more features. 

With Sourcegraph, you can ramp up your knowledge of React form libraries through searching across code that implement these libraries. You can also use Sourcegraph to review library documentation. 

[Formik](https://formik.org/) is the most popular open source library for building forms with React and React Native, with over 28,000 stars on its [GitHub repository](https://github.com/formium/formik). Let's use Sourcegraph to search across code that makes use of Formik so we can understand how developers are using this library.

<SourcegraphSearch query="Formik lang:JavaScript" patternType="literal"/>

Another library you may consider is [KendoReact Form](https://www.telerik.com/kendo-react-ui/components/form/), which helps you manage forms while also being a small package with no dependencies. Search across repositories that are making use of this package using Sourcegraph.

<SourcegraphSearch query="kendo-react-form lang:JavaScript" patternType="literal"/>

You can read more about [React form libraries on DEV](https://dev.to/pmbanugo/looking-for-the-best-react-form-library-in-2021-it-s-probably-on-this-list-e2h). Pair your reading with Sourcegraph to search across code to better understand these libraries and how other developers are using them.

## State management hooks

State management is an extensive topic in front-end development that allows the sharing of data across components, creating a concrete data structure to represent your React app’s state that you can read and write. You can read more about [state and lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) via the React docs. 

The way you will approach state management for your app mostly depends on its complexity. Many React developers benefit from implementing [hooks](https://reactjs.org/docs/hooks-overview.html), which are functions that allow you to _hook into_ React state features from function components so that you can use React without classes.

In React, you will likely come across the following hooks: `useState`, `useEffect`, `useRef`, `useCallback`, `useMemo`, `useContext`, and `useReducer`.

The `useRef` and `useState` hooks in particular are very common. We can use Sourcegraph to discover how developers are using `useRef` and `useState` in various apps and projects.

First, let’s search across `useRef` with the following query.

<SourcegraphSearch query="React.useRef() lang:JavaScript" patternType="literal"/>

You can compare the above search with `useRef lang:JavaScript`.

Now, let’s search `useState`. You can try different queries for both `React.useState()` and `useState`.

<SourcegraphSearch query="useState lang:JavaScript" patternType="literal"/>

Finally, you can search across code for the usage of _both_ `useState` and `useRef`:

<SourcegraphSearch query="useState AND useRef lang:JavaScript" patternType="literal"/>

From here, you can use Sourcegraph to find how the other hooks mentioned above are used.

## Error boundaries

React 16 introduced [error boundaries](https://reactjs.org/docs/error-boundaries.html), which are React components that catch JavaScript errors upon rendering, log the errors, and display a fallback UI (or user interface) to replace what failed.

If a class component defines either or both of the lifecycle methods of `static getDerivedStateFromError()` and `componentDidCatch()`, it becomes an error boundary. The first method can be used to render a fallback user interface after an error has been thrown, while the second method is used to log error information to an error reporting service.

Let’s discover how error boundaries are used in different projects with Sourcegraph:

<SourcegraphSearch query="static getDerivedStateFromError" patternType="literal"/>

You can click on a specific [file](https://sourcegraph.com/github.com/streamich/react-use/-/blob/stories/useError.story.tsx?L12:3&subtree=true) within your query results to read the complete code in context.

## PropTypes

[PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) are React’s way of providing type checking to your components. With React PropTypes, you can set the types for your props to avoid unexpected behavior.

We’ll perform two types of searches for `propTypes` to give us context on how developers use PropTypes in their codebase.

First, let’s use a [literal pattern search in Sourcegraph](https://learn.sourcegraph.com/how-to-search-code-with-sourcegraph-using-literal-patterns). 

<SourcegraphSearch query=".propTypes = {" patternType="literal"/>

Using Sourcegraph’s [structural search](https://learn.sourcegraph.com/how-to-search-with-sourcegraph-using-structural-patterns) for `propTypes` gives us a fuller understanding of what is being passed to the `propTypes` property for type checking. 

<SourcegraphSearch query=".propTypes = { ... }" patternType="structural" />

In this second search, you’ll find that developers are writing code that checks whether values are a given type. Additionally, they sometimes require that a prop be provided.

## Redux

Learning Redux, which offers a predictable state container for JavaScript apps, can come with a variety of pain points for developers. The [official Redux guide provides step-by-step tutorials and answers to frequently asked questions](https://redux.js.org/faq/general). Alongside digging into the documentation, you can leverage Sourcegraph to find Redux resources and speed up your learning. 

For our first query, we can search for apps that self-identify as being built with Redux by searching the following string. 

<SourcegraphSearch query="built with redux" patternType="literal"/>

You can further specify that you would like to receive results that combine React and Redux together. 

<SourcegraphSearch query="built with react redux" patternType="literal"/>

We can find how standard Redux toolkit APIs are used by searching API functions. Let’s search the `createAsyncThunk` function, which creates a level of abstraction over handling async request lifecycles. You can read more about this function in the [Redux API docs](https://redux-toolkit.js.org/api/createAsyncThunk). 

<SourcegraphSearch query="createAsyncThunk" patternType="literal"/>

This query returns many results about the usage of the `createAsyncThunk`’s API, but a good number of these are markdown files.  Let’s exclude markdown files from showing up in these results with a query that removes files with the `.md` and `.mdx` extensions. 

<SourcegraphSearch query="createAsyncThunk -file:\.md|.mdx$" patternType="literal"/>

The `file` keyword specifies files ending in `.md` or `.mdx` and the  `-file` syntax excludes them from the search results. Now, you’ll receive results that are primarily TypeScript and JavaScript code files. 

From here, you can use Sourcegraph to find out how `createSlice`, `createApi` and other Redux APIs are used in React apps.

If you are looking for [specific use cases](https://twitter.com/acemarke/status/1021015625311838209?s=20), Sourcegraph can provide the [context you need](https://sourcegraph.com/search?q=context:global+lang:JavaScript+connect%5C%28+pure:%5Cs*false&patternType=regexp). 

## Understanding error messages

Sourcegraph can help you find reasons behind specific error messages that pop up during React development.

You may have encountered this common error:

```

Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.

```

This error message pops up when re-rendering repeatedly occurs, especially when a method that uses `setState` is called in the `render` method. You can find the origin of this method with Sourcegraph.

<SourcegraphSearch query="Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops." patternType="literal"/>

In the search results, you can find where and how this React error message pops up and how developers are handling this error.

## Learn more

Learning how to use a new library or framework can be challenging, but with the right tools, you can speed up this process and get a better understanding of how different components can be connected.

If you'd like to learn more about Sourcegraph code search queries, check out more [search tutorials](https://learn.sourcegraph.com/tags/search)

From here, we recommend that you install [Sourcegraph’s browser extension](https://docs.sourcegraph.com/integration/browser_extension) so that you can readily search across your code and open source code.
