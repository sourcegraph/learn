import ArticleListTemplate, { Props as ArticleListTemplateProps } from '@components/templates/ArticleListTemplate'
import loadAllRecords from '@lib/loadAllRecords'
import capitalize from '@util/capitalize'
import collectTags from '@util/collectTags'
import filterRecordsForTags from '@util/filterRecordsForTag'
import getQueryParameter from '@util/getQueryParameters'
import omitUndefinedFields from '@util/omitUndefinedFields'
import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await loadAllRecords('posts')
    const videos = await loadAllRecords('videos')
    const tags = Array.from(collectTags(posts.concat(videos), true))
    return { paths: tags.map(tag => `/tags/${tag}`), fallback: false }
}

export const getStaticProps: GetStaticProps<ArticleListTemplateProps> = async context => {
    const tag = getQueryParameter(context.params, 'tag')
    const posts = await loadAllRecords('posts')
    const videos = await loadAllRecords('videos')
    const allRecords = posts.concat(videos)
    const filteredRecordsWithTag = filterRecordsForTags(allRecords, tag)
    const url = `/tags/${tag}`
    const headerText = `Records tagged with ${filteredRecordsWithTag.title}`

    return {
        props: {
            url,
            headerText,
            records: filteredRecordsWithTag.records.map(record => omitUndefinedFields({ 
                ...record, 
                url: `/${record.slug}`,
            })),
        },
    }
}

export default ArticleListTemplate
