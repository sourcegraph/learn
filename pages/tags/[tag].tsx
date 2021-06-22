import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import PageLayout from '../../components/PageLayout'
import collectTags from '../../util/collectTags'
import getQueryParam from '../../util/getQueryParam'
import loadAllPosts from '../../util/loadAllPosts'
import startCase from 'lodash/startCase'
import { MarkdownFileWithUrl } from '..'
import omitUndefinedFields from '../../util/omitUndefinedFields'
import ContentCardList from '../../components/ContentCardList'

interface Props {
    tag: string
    posts: MarkdownFileWithUrl[]
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await loadAllPosts()
    const tags = collectTags(posts)
    return { paths: tags.map(tag => `/tags/${tag}`), fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async context => {
    const tag = getQueryParam(context.params, 'tag').toLowerCase()
    const posts = await loadAllPosts()
    const filteredPosts = posts.filter(post => post.frontMatter.tags.includes(tag))

    return {
        props: {
            tag,
            posts: filteredPosts.map(post => omitUndefinedFields({ ...post, url: `/posts/${post.slug}` })),
        },
    }
}

export default function TagPage(props: Props) {
    const tagName = startCase(props.tag)
    return (
        <PageLayout contentTitle={`Posts tagged ${tagName}`}>
            <h1 className="mb-5">Posts tagged {tagName}</h1>

            <ContentCardList posts={props.posts} />
        </PageLayout>
    )
}
