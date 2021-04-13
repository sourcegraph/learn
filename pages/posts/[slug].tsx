import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import PageLayout from '../../components/PageLayout'
import { MdxRemote } from 'next-mdx-remote/types'
import useHydrate from 'next-mdx-remote/hydrate'
import Counter from '../../components/Counter'
import renderMdxSource from '../../util/renderMdxSource'
import loadMarkdownFile from '../../util/loadMarkdownFile'
import listAllPosts from '../../util/listAllPosts'
import getQueryParam from '../../util/getQueryParam'
import startCase from 'lodash/startCase'
import Link from 'next/link'

const components = { Counter }
interface Props {
    title: string
    tags: string[]
    mdxSource: MdxRemote.Source
}

export default function Post(props: Props) {
    const content = useHydrate(props.mdxSource, { components })
    return (
        <PageLayout>
            <h1>{props.title}</h1>

            <div className="mb-5">
                {props.tags.map(tag => (
                    <>
                        <Link href={`/tags/${tag}`}>
                            <a className="badge badge-primary mr-1">{startCase(tag)}</a>
                        </Link>
                    </>
                ))}
            </div>

            <div className="markdown-content">{content}</div>
        </PageLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const entries = await listAllPosts('posts')
    const paths = entries.map(entry => ({ params: { slug: entry } }))
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<Props> = async context => {
    const slug = getQueryParam(context.params, 'slug')
    const baseDirectory = 'posts'
    const markdownFile = await loadMarkdownFile(baseDirectory, slug)
    const mdxSource = await renderMdxSource(markdownFile, components)

    return {
        props: {
            title: markdownFile.frontMatter.title ?? 'Untitled',
            tags: markdownFile.frontMatter.tags,
            mdxSource,
        },
    }
}
