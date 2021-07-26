import { GetStaticProps } from 'next'
import React from 'react'

import ContentCardList from '../components/ContentCardList'
import Header from '../components/Header'
import PageLayout from '../components/PageLayout'
import loadAllRecords from '../util/loadAllRecords'
import MarkdownFile from '../util/MarkdownFile'
import omitUndefinedFields from '../util/omitUndefinedFields'

export type MarkdownFileWithUrl = MarkdownFile & { url: string }

interface Props {
    posts: MarkdownFileWithUrl[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const posts = await loadAllRecords('posts')

    return {
        props: {
            posts: posts.map(post => omitUndefinedFields({ ...post, url: `/${post.slug}` })),
        },
    }
}

const Home: React.FunctionComponent<Props> = props => (
    <PageLayout>
        <Header
            showCta={true}
            link='/guides/code-search'
            text='Full guide to code search'/>
        <ContentCardList records={props.posts} />
    </PageLayout>
)

export default Home
