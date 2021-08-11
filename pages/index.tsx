import ContentCardList from '@components/atoms/ContentCardList'
import Header from '@components/Header'
import PageLayout from '@components/layouts/PageLayout'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import loadAllRecords from '@lib/loadAllRecords'
import omitUndefinedFields from '@util/omitUndefinedFields'
import { GetStaticProps } from 'next'
import React from 'react'

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
            showImage={true}
            headerImage='/headers/sourcegraph-learn-header.svg'
            headerImageAlt='Sourcegraph Learn' />
        <ContentCardList records={props.posts} />
    </PageLayout>
)

export default Home
