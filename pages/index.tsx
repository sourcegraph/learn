import { GetStaticProps } from 'next'
import React from 'react'
import PageLayout from '../components/PageLayout'
import loadAllPosts from '../util/loadAllPosts'
import { MarkdownFile } from '../util/loadMarkdownFile'
import omitUndefinedFields from '../util/omitUndefinedFields'
import ContentCardList from '../components/ContentCardList'

export type MarkdownFileWithUrl = MarkdownFile & { url: string }

interface Props {
    posts: MarkdownFileWithUrl[]
}

export const getStaticProps: GetStaticProps<Props> = async context => {
    const posts = await loadAllPosts()

    return {
        props: {
            posts: posts.map(post => omitUndefinedFields({ ...post, url: `/posts/${post.slug}` })),
        },
    }
}

export default function Home(props: Props) {
    return (
        <PageLayout>
            <div className="row">
                <img src="/headers/sourcegraph-learn-header.svg" className="w-100 mb-5" />
            </div>

            <ContentCardList posts={props.posts} />
        </PageLayout>
    )
}
