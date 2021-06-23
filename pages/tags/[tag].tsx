import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import PageLayout from '../../components/PageLayout'
import collectTags from '../../util/collectTags'
import getQueryParam from '../../util/getQueryParam'
import loadAllPosts from '../../util/loadAllPosts'
import { LinkEntry } from '../posts'
import startCase from 'lodash/startCase'

interface Props {
    tag: string
    links: LinkEntry[]
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
    const links = filteredPosts.map(post => ({
        title: post.frontMatter.title,
        url: `/posts/${post.slug}`,
    }))
    return {
        props: {
            tag,
            links,
        },
    }
}

export default function TagPage(props: Props) {
    const tagName = startCase(props.tag)
    return (
        <PageLayout contentTitle={`Posts tagged ${tagName}`}>
            <h1 className="mb-5">Posts tagged {tagName}</h1>
            <ul>
                {props.links.map(link => (
                    <li>
                        <Link href={link.url}>
                            <a>{link.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </PageLayout>
    )
}
