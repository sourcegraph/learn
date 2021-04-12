import { GetStaticPaths, GetStaticProps } from 'next'
import React, { useState } from 'react'
import PageLayout from '../../components/PageLayout'
import { MdxRemote } from 'next-mdx-remote/types'
import useHydrate from 'next-mdx-remote/hydrate'
import { ParsedUrlQuery } from 'querystring'
import renderMdx from '../../util/loadMarkdownFile'
import Counter from '../../components/Counter'
import renderMdxSource from '../../util/renderMdxSource'
import loadMarkdownFile from '../../util/loadMarkdownFile'
import listAllPosts from '../../util/listAllPosts'

const components = { Counter }
interface Props {
    title: string
    mdxSource: MdxRemote.Source
}

export default function Post(props: Props) {
    const content = useHydrate(props.mdxSource, { components })
    return (
        <PageLayout>
            <h1 className="mb-5">{props.title}</h1>
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

function getQueryParam(params: ParsedUrlQuery | undefined, name: string): string {
    if (!params) {
        throw new Error('getQueryParam: No params provided')
    }
    let value = params[name]
    if (Array.isArray(value)) {
        value = value[0]
    }
    if (!value) {
        throw new Error(`getQueryParam: Missing param value "${name}"`)
    }
    return value
}

export const getStaticProps: GetStaticProps<Props> = async context => {
    const slug = getQueryParam(context.params, 'slug')
    const baseDirectory = 'posts'
    const markdownFile = await loadMarkdownFile(baseDirectory, slug)
    const mdxSource = await renderMdxSource(markdownFile, components)

    return {
        props: {
            title: markdownFile.frontMatter.title ?? 'Untitled',
            mdxSource,
        },
    }
}
