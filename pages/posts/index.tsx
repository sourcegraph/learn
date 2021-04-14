import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import PageLayout from '../../components/PageLayout'
import collectTags from '../../util/collectTags'
import loadAllPosts from '../../util/loadAllPosts'

interface LinkEntry {
    title: string
    url: string
}
interface Props {
    links: LinkEntry[]
}

export const getStaticProps: GetStaticProps<Props> = async context => {
    const posts = await loadAllPosts()
    const postLinks = posts.map(post => ({
        title: post.frontMatter.title,
        url: `/posts/${post.filename}`,
    }))
    const tags = collectTags(posts)
    const tagLinks = tags.map(tag => ({
        title: `Posts tagged "${tag}"`,
        url: `/tags/${tag}`,
    }))
    return {
        props: {
            links: [
                {
                    title: 'About',
                    url: '/about',
                },
                ...postLinks,
                ...tagLinks,
            ],
        },
    }
}
export default function Home(props: Props) {
    return (
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
}
