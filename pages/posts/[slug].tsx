import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import PageLayout from '../../components/PageLayout'
import getAllPosts from '../../util/getAllPosts'

interface Props {
    title: string
    content: string
}

export default function Post(props: Props) {
    return (
        <PageLayout>
            <h1>{props.title}</h1>
            <div>{props.content}</div>
        </PageLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const entries = await getAllPosts()
    const paths = entries.map(entry => ({ params: { slug: entry } }))
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<Props> = async context => {
    const slug = context.params['slug']
    return {
        props: {
            title: 'Test title for: ' + slug,
            content: 'Test content for' + slug,
        },
    }
}
