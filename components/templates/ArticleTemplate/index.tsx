import RegexIcon from 'mdi-react/RegexIcon'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import React from 'react'
import rehypeReact from 'rehype-react'
import unified from 'unified'
import { Node } from 'unist'

import RecordCollection from '../../../interfaces/RecordCollection'
import Button from '../../atoms/Button'
import CollectionView from '../../atoms/CollectionView'
import EmbeddedYoutubeVideo from '../../atoms/EmbeddedYoutubeVideo'
import GifLikeVideo from '../../atoms/GifLikeVideo'
import SourcegraphSearch from '../../atoms/SourcegraphSearch'
import TocWrapper from '../../atoms/TocWrapper'
import { MetaTags } from '../../layouts/Layout'
import PageLayout from '../../layouts/PageLayout'

import {
    StyledHeaderImage,
    StyledAuthorByline,
    StyledTagsWrapper,
    StyledMarkdownWrapper,
} from './ArticleTemplateStyles'

export interface Props {
    title: string
    author?: string | null
    tags: string[]
    mdxSource: MDXRemoteSerializeResult
    image?: string | null
    imageAlt?: string | null
    socialImage?: string | null
    description?: string | null
    toc?: Node | null
    collection?: RecordCollection | null
    slug: string
    alternateTitle?: string | null
    initialSearchResults?: SearchResults | null
}

interface SearchResults {
    data: Node
    search: Node
    results: Node
}

const components = { SourcegraphSearch, EmbeddedYoutubeVideo, GifLikeVideo, RegexIcon, CollectionView }

const ArticleTemplate: React.FunctionComponent<Props> = props => {
    const metaTags: MetaTags = {
        image: props.socialImage ?? props.image,
        description: props.description,
        type: 'article',
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

    // The alternate title, if present, is used for the document title and it omits the site title suffix.
    const documentTitle = props.alternateTitle || props.title
    const appendSiteTitle = !props.alternateTitle
    console.log(props.initialSearchResults)

    return (
        <PageLayout
            documentTitle={documentTitle}
            appendSiteTitle={appendSiteTitle}
            metaTags={metaTags}
            leftColumn={tocFragment}
        >
            {/* Header image */}
            {props.image && showHeaderImage && (
                <StyledHeaderImage src={props.image} alt={props.imageAlt ? props.imageAlt : ''} />
            )}

            {/* Title and author */}
            <h1>{props.title}</h1>
            {props.author && <StyledAuthorByline>By {props.author}</StyledAuthorByline>}

            {/* Tags list */}
            {props.tags.length > 0 ? (
                <StyledTagsWrapper>
                    {props.tags.map(tag => (
                        <Button key={tag} href={`/tags/${tag}`} className='extra-small'>
                            {tag}
                        </Button>
                    ))}
                </StyledTagsWrapper>
            ) : null}

            {props.collection && (
                <CollectionView
                    title={props.collection.title}
                    members={props.collection.members}
                    activeSlug={props.slug}
                />
            )}

            <StyledMarkdownWrapper>
                <MDXRemote {...props.mdxSource} components={components} />
            </StyledMarkdownWrapper>
        </PageLayout>
    )
}

export default ArticleTemplate
