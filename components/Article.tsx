import RegexIcon from 'mdi-react/RegexIcon'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Link from 'next/link'
import React from 'react'

import EmbeddedYoutubeVideo from './EmbeddedYoutubeVideo'
import GifLikeVideo from './GifLikeVideo'
import { MetaTags } from './Layout'
import PageLayout from './PageLayout'
import SourcegraphSearch from './SourcegraphSearch'
export interface Props {
    title: string
    author: string
    tags: string[]
    mdxSource: MDXRemoteSerializeResult
    image?: string
    description?: string
}

const components = { SourcegraphSearch, EmbeddedYoutubeVideo, GifLikeVideo, RegexIcon }

const Article: React.FunctionComponent<Props> = props => {
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

export default Article
