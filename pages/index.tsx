import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import PageLayout from '../components/PageLayout'
import getAllPosts from '../util/getAllPosts'

interface LinkEntry {
    title: string
    url: string
}
interface Props {
    links: LinkEntry[]
}

export const getStaticProps: GetStaticProps<Props> = async context => {
    const markdownEntries = await getAllPosts()
    const markdownLinks = markdownEntries.map(file => ({ title: file, url: `/posts/${file}` }))
    return {
        props: {
            links: [
                // TODO: this will be manually scanned from the filesystem eventually
                {
                    title: 'How to install Sourcegraph',
                    url: '/how-to-install-sourcegraph',
                },
                ...markdownLinks,
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
