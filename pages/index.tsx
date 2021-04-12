import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import PageLayout from '../components/PageLayout'
import listAllPosts from '../util/listAllPosts'
import loadAllPosts from '../util/loadAllPosts'

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
        title: post.frontMatter.title || 'Untitled',
        url: `/posts/${post.filename}`,
    }))
    return {
        props: {
            links: [
                {
                    title: 'About',
                    url: '/about',
                },
                ...postLinks,
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
