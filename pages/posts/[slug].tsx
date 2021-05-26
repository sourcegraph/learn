import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import PageLayout from '../../components/PageLayout'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Counter from '../../components/Counter'
import serializeMdxSource from '../../util/serializeMdxSource'
import loadMarkdownFile from '../../util/loadMarkdownFile'
import getQueryParam from '../../util/getQueryParam'
import startCase from 'lodash/startCase'
import Link from 'next/link'
import loadAllPosts from '../../util/loadAllPosts'
import SourcegraphSearch from '../../components/SourcegraphSearch'

const classForHeadingElements = 'mb-4 mt-5'
const markdownComponents = {
    img: createComponentWithClasses('img', 'my-5 w-100'),
    h1: createComponentWithClasses('h1', classForHeadingElements),
    h2: createComponentWithClasses('h2', classForHeadingElements),
    h3: createComponentWithClasses('h3', classForHeadingElements),
    h4: createComponentWithClasses('h4', classForHeadingElements),
    h5: createComponentWithClasses('h5', classForHeadingElements),
} as const

function createComponentWithClasses<T extends keyof JSX.IntrinsicElements>(tag: T, className: string) {
    return function (props: JSX.IntrinsicElements[T]) {
        return React.createElement(tag, { ...props, className: `${props.className ?? ''} ${className}` })
    }
}

const components = { Counter, SourcegraphSearch, ...markdownComponents }
interface Props {
    title: string
    author: string
    tags: string[]
    mdxSource: MDXRemoteSerializeResult
}

export default function Post(props: Props) {
    return (
        <PageLayout contentTitle={props.title}>
            <h1>{props.title}</h1>
            {props.author && <p className="text-muted">By {props.author}</p>}

            <div className="mb-5">
                {props.tags.map(tag => (
                    <Link key={tag} href={`/tags/${tag}`}>
                        <a className="me-1">
                            <span className="badge bg-primary">{startCase(tag)}</span>
                        </a>
                    </Link>
                ))}
            </div>

            <div className="markdown-content">
                <MDXRemote {...props.mdxSource} components={components} />
            </div>

            <div className="card mt-5">
                <div className="card-body">
                    <div className="row">
                        <div className="col-2">
                            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                                <img
                                    alt="Creative Commons badge"
                                    className="w-100"
                                    src="/creative-commons-by-nc-sa.svg"
                                />
                            </a>
                        </div>
                        <div className="col-10 col-xs-12">
                            Licensed under
                            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                                Creative Commons BY-NC-SA 4.0
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await loadAllPosts(true)
    const paths = posts.map(post => ({ params: { slug: post.slug } }))
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<Props> = async context => {
    const slug = getQueryParam(context.params, 'slug')
    const baseDirectory = 'posts'
    const markdownFile = await loadMarkdownFile(baseDirectory, slug + '.md')
    const mdxSource = await serializeMdxSource(markdownFile)

    return {
        props: {
            title: markdownFile.frontMatter.title ?? 'Untitled',
            author: markdownFile.frontMatter.author ?? '',
            tags: markdownFile.frontMatter.tags,
            mdxSource,
        },
    }
}
