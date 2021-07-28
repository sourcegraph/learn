import { GetStaticProps } from 'next'
import React from 'react'

import AuthorCardList from '../../components/AuthorCardList'
import PageLayout from '../../components/PageLayout'
import AuthorCollection from '../../util/AuthorCollection'
import loadAllRecords from '../../util/loadAllRecords'
import loadAuthorCollections from '../../util/loadAuthorCollections'
import MarkdownFile from '../../util/MarkdownFile'
import omitUndefinedFields from '../../util/omitUndefinedFields'

export type MarkdownFileWithUrl = MarkdownFile & { url: string }

interface Props {
    uniqueAuthors: AuthorCollection[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const posts = await loadAllRecords('posts')
    const guides = await loadAllRecords('guides')
    const combinedRecords = posts.concat(guides)
    const { authors } = await loadAuthorCollections()
    return {
        props: omitUndefinedFields({
            uniqueAuthors: authors.filter(author => {
                const recordAuthors = combinedRecords.map(record => omitUndefinedFields(record.frontMatter.author))
                return recordAuthors.includes(author.id)
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
