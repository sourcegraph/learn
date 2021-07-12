import { GetStaticProps } from 'next'
import React from 'react'

import AuthorCardList from '../../components/AuthorCardList'
import PageLayout from '../../components/PageLayout'
import loadAllPosts from '../../util/loadAllPosts'
import MarkdownFile from '../../util/MarkdownFile'
import omitUndefinedFields from '../../util/omitUndefinedFields'

export type MarkdownFileWithUrl = MarkdownFile & { url: string }

interface Props {
    posts: MarkdownFileWithUrl[],
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const posts = await loadAllPosts()

    return {
        props: {
            posts: posts.map(post => omitUndefinedFields({ ...post, url: `/posts/${post.slug}` })),
            authors: posts.map(post => post.frontMatter.author),
        },
    }
}

const AuthorHome: React.FunctionComponent<Props> = props => (
    <PageLayout>
        <AuthorCardList posts={props.posts} />
    </PageLayout>
)

export default AuthorHome
