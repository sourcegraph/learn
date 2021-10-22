import Button from '@components/atoms/Button'
import CollectionView from '@components/atoms/CollectionView'
import EmbeddedYoutubeVideo from '@components/atoms/EmbeddedYoutubeVideo'
import GifLikeVideo from '@components/atoms/GifLikeVideo'
import Highlighter from '@components/atoms/Highlighter'
import SourcegraphSearch from '@components/atoms/SourcegraphSearch'
import TocWrapper from '@components/atoms/TocWrapper'
import PageLayout from '@components/layouts/PageLayout'
import MetaTags from '@interfaces/MetaTags'
import RecordCollection from '@interfaces/RecordCollection'
import metaDataDefaults from '@lib/metaDataDefaults'
import capitalize from '@util/capitalize'
import sluggify from '@util/sluggify'
import slugToTitleCase from '@util/slugToTitleCase'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { FunctionComponent } from 'react'

import {
    StyledHeaderImage,
    StyledAuthorByline,
    StyledDates,
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
    toc?: string[] | null
    collection?: RecordCollection | null
    slug: string
    browserTitle?: string | null
    publicationDate?: string | null
    updatedDate?: string | null
}

const components = { SourcegraphSearch, EmbeddedYoutubeVideo, GifLikeVideo, CollectionView, Highlighter }

const ArticleTemplate: FunctionComponent<Props> = props => {
    const metaTags: MetaTags = {
        // If present, the alternate title is used for the document title without the site title suffix.
        title: props.browserTitle
            ? props.browserTitle
            : props.title
            ? `${props.title} - ${metaDataDefaults.title}`
            : metaDataDefaults.title,
        image: props.image ?? metaDataDefaults.image,
        description: props.description ?? metaDataDefaults.description,
        type: 'article',
        url: `${metaDataDefaults.url}/${props.slug}`,
        author: props.author
            ? slugToTitleCase(props.author)
            : null
    }

    // Special behavior on a video page (which is a page with the "video" tag):
    // We don't show the post header image because it's just the thumbnail.
    // The image will still be shown on the post's card and in social sharing.
    // TODO: We can improve this by adding a `showImageInHeader` field in markdown front-matter
    // to be able to override this special behavior.
    const showHeaderImage = !props.tags.includes('video')

    return (
        <PageLayout
            metaTags={metaTags}
            leftColumn={props.toc && (
                <>
                    <TocWrapper tocContents={props.toc} slug={props.slug} />
                </>
            )}
        >
            {/* Header image */}
            {props.image && showHeaderImage && (
                <StyledHeaderImage
                    src={props.image} 
                    alt={props.imageAlt ? 
                        props.imageAlt
                        : ''} 
                    width="648" 
                    height="338" />
            )}

            {/* Title */}
            <h1>{props.title}</h1>

            {/* Tags list */}
            {props.tags.length > 0 ? 
                (
                    <StyledTagsWrapper>
                        {props.tags.map(tag => (
                            <Button key={tag} href={`/tags/${sluggify(tag)}`} className='extra-small'>
                                {capitalize(tag)}
                            </Button>
                        ))}
                    </StyledTagsWrapper>
                ) 
                : null}

            {/* Author */}
            {props.author && (
                <StyledAuthorByline href={`/authors/${props.author}`}>{slugToTitleCase(props.author)}</StyledAuthorByline>
            )}

            {/* Dates */}
            {props.publicationDate && (
                <StyledDates> Published on {props.publicationDate}
                    {props.updatedDate && (
                        <> • Updated on {props.updatedDate}</>
                    )} 
                </StyledDates>
            )}

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
