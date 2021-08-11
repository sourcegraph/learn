import AuthorCardList from '@components/atoms/AuthorCardList'
import PageLayout from '@components/layouts/PageLayout'
import AuthorCollection from '@interfaces/AuthorCollection'
import loadAllRecords from '@lib/loadAllRecords'
import loadAuthorCollections from '@lib/loadAuthorCollections'
import omitUndefinedFields from '@util/omitUndefinedFields'
import { GetStaticProps } from 'next'
import React from 'react'

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
