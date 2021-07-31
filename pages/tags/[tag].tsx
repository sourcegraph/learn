import startCase from 'lodash/startCase'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

import ContentCardList from '../../components/atoms/ContentCardList'
import PageLayout from '../../components/layouts/PageLayout'
import loadAllRecords from '../../lib/loadAllRecords'
import { MarkdownFileWithUrl } from '../../types/MarkdownFileWithUrl'
import collectTags from '../../util/collectTags'
import getQueryParameter from '../../util/getQueryParameters'
import omitUndefinedFields from '../../util/omitUndefinedFields'

interface Props {
    tag: string
    records: MarkdownFileWithUrl[]
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await loadAllRecords('posts')
    const guides = await loadAllRecords('guides')
    const combinedRecords = posts.concat(guides)
    const tags = collectTags(combinedRecords)
    return { paths: tags.map(tag => `/tags/${tag}`), fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async context => {
    const tag = getQueryParameter(context.params, 'tag').toLowerCase()
    const posts = await loadAllRecords('posts')
    const guides = await loadAllRecords('guides')
    const combinedRecords = posts.concat(guides)
    const filteredRecords = combinedRecords.filter(record => record.frontMatter.tags.includes(tag))

    return {
        props: {
            tag,
            records: filteredRecords.map(record => omitUndefinedFields({
                ...record,
                url: record.frontMatter.type === 'posts' ? `/${record.slug}` : `/${record.frontMatter.type}/${record.slug}`
            })),
        },
    }
}

const TagPage: React.FunctionComponent<Props> = props => {
    const tagName = startCase(props.tag)
    return (
        <PageLayout documentTitle={`Records tagged with ${tagName}`} appendSiteTitle={true}>
            <h1 className="mb-5">Records tagged with {tagName}</h1>

            <ContentCardList records={props.records} />
        </PageLayout>
    )
}

export default TagPage
