import RegexIcon from 'mdi-react/RegexIcon'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Link from 'next/link'
import React from 'react'
import rehypeReact from 'rehype-react'
import unified from 'unified'
import { Node } from 'unist'

import { PostCollection } from '../util/loadCollections'

import CollectionView from './CollectionView'
import EmbeddedYoutubeVideo from './EmbeddedYoutubeVideo'
import GifLikeVideo from './GifLikeVideo'
import { MetaTags } from './Layout'
import PageLayout from './PageLayout'
import SourcegraphSearch from './SourcegraphSearch'
import TocWrapper from './TocWrapper'

export interface Props {
    title: string
    author: string
    tags: string[]
    mdxSource: MDXRemoteSerializeResult
    image?: string
    imageAlt?: string
    socialImage?: string
    description?: string
    toc?: Node
    collection?: PostCollection
    slug: string
    alternateTitle?: string
}

const components = { SourcegraphSearch, EmbeddedYoutubeVideo, GifLikeVideo, RegexIcon, CollectionView }

const Article: React.FunctionComponent<Props> = props => {
    const metaTags: MetaTags = {
        image: props.socialImage ?? props.image,
        description: props.description,
    }

    // Special behavior on a video page (which is a page with the "video" tag):
    // We don't show the post header image because it's just the thumbnail.
    // The image will still be shown on the post's card and in social sharing.
    // TODO: We can improve this by adding a `showImageInHeader` field in markdown front-matter
    // to be able to override this special behavior.
    const showHeaderImage = !props.tags.includes('video')

    let tocFragment
    if (props.toc) {
        tocFragment = unified().use(rehypeReact, { createElement: React.createElement }).stringify(props.toc)
        tocFragment = (
            <>
                <TocWrapper tocContents={tocFragment} />
            </>
        )
    }
    return (
        <PageLayout contentTitle={props.alternateTitle ?? props.title} metaTags={metaTags} leftColumn={tocFragment}>
            {/* Header image */}
            {props.image && showHeaderImage && <img src={props.image} className="w-100 mb-5" alt={props.imageAlt ? props.imageAlt : ''} />}

            {/* Title and author */}
            <h1>{props.title}</h1>
            {props.author && <p className="text-muted">By {props.author}</p>}

            {/* Tags list */}
            {props.tags.length > 0 ? (
                <div className="mb-5">
                    {props.tags.map(tag => (
                        <Link key={tag} href={`/tags/${tag}`}>
                            <a className="me-1">
                                <span className="badge bg-primary text-capitalize">{tag}</span>
                            </a>
                        </Link>
                    ))}
                </div>
            ) : null}

            {props.collection && (
                <CollectionView
                    title={props.collection.title}
                    members={props.collection.members}
                    activeSlug={props.slug}
                />
            )}

            <div className="markdown-content">
                <MDXRemote {...props.mdxSource} components={components} />
            </div>
        </PageLayout>
    )
}

export default Article
