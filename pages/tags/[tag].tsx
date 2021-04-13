import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import PageLayout from '../../components/PageLayout'
import collectTags from '../../util/collectTags'
import getQueryParam from '../../util/getQueryParam'
import loadAllPosts from '../../util/loadAllPosts'
import { MarkdownFile } from '../../util/loadMarkdownFile'

interface Props {
    tag: string
    posts: MarkdownFile[]
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
            posts: filteredPosts,
        },
    }
}

export default function TagPage(props: Props) {
    return (
        <PageLayout>
            <h1 className="mb-5">
                Posts tagged <code>{props.tag}</code>
            </h1>
            <ul>
                {props.posts.map(post => (
                    <li>
                        <Link href={`/posts/${post.filename}`}>
                            <a>{post.frontMatter.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </PageLayout>
    )
}
