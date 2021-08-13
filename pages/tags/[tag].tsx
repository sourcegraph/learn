import ContentCardList from '@components/atoms/ContentCardList'
import Header from '@components/Header'
import PageLayout from '@components/layouts/PageLayout'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import loadAllRecords from '@lib/loadAllRecords'
import collectTags from '@util/collectTags'
import getQueryParameter from '@util/getQueryParameters'
import omitUndefinedFields from '@util/omitUndefinedFields'
import startCase from 'lodash/startCase'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FunctionComponent } from 'react'

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

const TagPage: FunctionComponent<Props> = props => {
    const tagName = startCase(props.tag)
    return (
        <PageLayout documentTitle={`Records tagged with ${tagName}`} appendSiteTitle={true}>
            <Header 
                showImage={false}
                headerText={`Records tagged with ${tagName}`}
            />
            <ContentCardList records={props.records} />
        </PageLayout>
    )
}

export default TagPage
