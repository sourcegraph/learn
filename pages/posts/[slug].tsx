import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import PageLayout from '../../components/PageLayout'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Counter from '../../components/Counter'
import serializeMdxSource from '../../util/serializeMdxSource'
import loadMarkdownFile from '../../util/loadMarkdownFile'
import getQueryParam from '../../util/getQueryParam'
import Link from 'next/link'
import loadAllPosts from '../../util/loadAllPosts'
import SourcegraphSearch from '../../components/SourcegraphSearch'
import LinkIcon from 'mdi-react/LinkIcon'
import { MetaTags } from '../../components/Layout'
import EmbeddedYoutubeVideo from '../../components/EmbeddedYoutubeVideo'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

const classForHeadingElements = 'mb-4 mt-5 reveal-on-hover-parent'
const markdownComponents = {
    img: createComponentWithClasses('img', 'my-5 w-100'),
    h1: createLinkableHeading('h1'),
    h2: createLinkableHeading('h2'),
    h3: createLinkableHeading('h3'),
    h4: createLinkableHeading('h4'),
    h5: createLinkableHeading('h5'),
} as const

function mergeClassName(props: { className?: string }, addedClassName: string) {
    const baseClass = props.className ?? ''
    const className = `${baseClass} ${addedClassName}`.trim()
    return (props = { ...props, className })
}

/**
 * Create a component that merges the given class names. Accepts any intrinsic
 * HTML element, so that it can be used for Markdown element replacement.
 */
function createComponentWithClasses<T extends keyof JSX.IntrinsicElements>(tag: T, className: string) {
    return function (props: JSX.IntrinsicElements[T]) {
        return React.createElement(tag, mergeClassName(props, className))
    }
}
/**
 * Create a heading component (h1, h2, h3, etc) that includes a link icon which
 * is revealed on hover and which links to the heading, to allow sharing links
 * that point to particular sections in the markdown. The link is the same as
 * generated in the table of contents.
 */
function createLinkableHeading<T extends HeadingTag>(tag: T) {
    return function (props: JSX.IntrinsicElements[T]) {
        const children = (
            <>
                {props.children}
                {props.id && (
                    <a className="ms-2 reveal-on-hover-child" title="Link to this section" href={`#${props.id}`}>
                        <LinkIcon />
                    </a>
                )}
            </>
        )
        return React.createElement(tag, mergeClassName(props, classForHeadingElements), children)
    }
}

const components = { Counter, SourcegraphSearch, EmbeddedYoutubeVideo, ...markdownComponents }
interface Props {
    title: string
    author: string
    tags: string[]
    mdxSource: MDXRemoteSerializeResult
    image?: string
    description?: string
}

export default function Post(props: Props) {
    const metaTags: MetaTags = {
        image: props.image,
        description: props.description,
    }

    // Special behavior on a video page (which is a page with the "video" tag):
    // We don't show the post header image because it's just the thumbnail.
    // The image will still be shown on the post's card and in social sharing.
    // TODO: We can improve this by adding a `showImageInHeader` field in markdown front-matter
    // to be able to override this special behavior.
    const showHeaderImage = !props.tags.includes('video')

    return (
        <PageLayout contentTitle={props.title} metaTags={metaTags}>
            {/* Header image */}
            {props.image && showHeaderImage && <img src={props.image} className="w-100 mb-5" />}

            {/* Title and author */}
            <h1>{props.title}</h1>
            {props.author && <p className="text-muted">By {props.author}</p>}

            {/* Tags list */}
            {props.tags.length && (
                <div className="mb-5">
                    {props.tags.map(tag => (
                        <Link key={tag} href={`/tags/${tag}`}>
                            <a className="me-1">
                                <span className="badge bg-primary text-capitalize">{tag}</span>
                            </a>
                        </Link>
                    ))}
                </div>
            )}

            <div className="markdown-content">
                <MDXRemote {...props.mdxSource} components={components} />
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
            title: markdownFile.frontMatter.title,
            author: markdownFile.frontMatter.author ?? '',
            tags: markdownFile.frontMatter.tags,
            image: markdownFile.frontMatter.image ?? '',
            description: markdownFile.frontMatter.description ?? '',
            mdxSource,
        },
    }
}
