import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'

import AuthorCardList from '../../components/AuthorCardList'
import PageLayout from '../../components/PageLayout'
import loadAllPosts from '../../util/loadAllPosts'
import loadCollections, {AuthorDefinition} from '../../util/loadCollections'
import MarkdownFile from '../../util/MarkdownFile'
import omitUndefinedFields from '../../util/omitUndefinedFields'

export type MarkdownFileWithUrl = MarkdownFile & { url: string }

interface Props {
    uniqueAuthors: AuthorDefinition[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const posts = await loadAllPosts()
    const { authors } = await loadCollections()
    return {
            props: omitUndefinedFields({
                authorCollection: authors,
                authors: posts.map(post => omitUndefinedFields(post.frontMatter.author)),
                uniqueAuthors: authors.filter(element => {
                    const articleAuthors = posts.map(post => omitUndefinedFields(post.frontMatter.author))
                    return articleAuthors.includes(element.id)
                })
    })
}
}

const AuthorHome: React.FunctionComponent<Props> = props => (
    <PageLayout>
        <AuthorCardList authors={props.uniqueAuthors} />
    </PageLayout>
)

export default AuthorHome
