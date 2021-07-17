import { GetStaticProps } from 'next'
import React from 'react'

import ContentCardList from '../components/ContentCardList'
import PageLayout from '../components/PageLayout'
import loadAllPosts from '../util/loadAllPosts'
import MarkdownFile from '../util/MarkdownFile'
import omitUndefinedFields from '../util/omitUndefinedFields'

export type MarkdownFileWithUrl = MarkdownFile & { url: string }

interface Props {
    posts: MarkdownFileWithUrl[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const posts = await loadAllPosts()

    return {
        props: {
            posts: posts.map(post => omitUndefinedFields({ ...post, url: `/${post.slug}` })),
        },
    }
}

const Home: React.FunctionComponent<Props> = props => (
    <PageLayout>
        <div className="row">
            <img src="/headers/sourcegraph-learn-header.svg" className="w-100 mb-5" />
        </div>
        <ContentCardList posts={props.posts} />
    </PageLayout>
)

export default Home
