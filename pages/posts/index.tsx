import startCase from 'lodash/startCase'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'

import PageLayout from '../../components/PageLayout'
import collectTags from '../../util/collectTags'
import loadAllPosts from '../../util/loadAllPosts'

export interface LinkEntry {
    title: string
    url: string
}
interface Props {
    links: LinkEntry[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const posts = await loadAllPosts()
    const postLinks = posts.map(post => ({
        title: post.frontMatter.title,
        url: `/posts/${post.slug}`,
    }))
    const tags = collectTags(posts)
    const tagLinks = tags.map(tag => ({
        title: `Posts tagged ${startCase(tag)}`,
        url: `/tags/${tag}`,
    }))
    return {
        props: {
            links: [...postLinks, ...tagLinks],
        },
    }
}
const Posts: React.FunctionComponent<Props> = props => (
    <PageLayout>
        <ul>
            {props.links.map(linkEntry => (
                <li key={linkEntry.url}>
                    <Link href={linkEntry.url}>{linkEntry.title}</Link>
                </li>
            ))}
        </ul>
    </PageLayout>
)

export default Posts
