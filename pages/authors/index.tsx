import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'

import AuthorCardList from '../../components/AuthorCardList'
import PageLayout from '../../components/PageLayout'
import loadAllRecords from '../../util/loadAllRecords'
import loadCollections, {AuthorDefinition} from '../../util/loadCollections'
import MarkdownFile from '../../util/MarkdownFile'
import omitUndefinedFields from '../../util/omitUndefinedFields'

export type MarkdownFileWithUrl = MarkdownFile & { url: string }

interface Props {
    uniqueAuthors: AuthorDefinition[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const posts = await loadAllRecords('posts')
    const guides = await loadAllRecords('guides')
    const combinedRecords = posts.concat(guides)
    const { authors } = await loadCollections('posts')
    return {
            props: omitUndefinedFields({
                uniqueAuthors: authors.filter(element => {
                    const recordAuthors = combinedRecords.map(record => omitUndefinedFields(record.frontMatter.author))
                    return recordAuthors.includes(element.id)
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
