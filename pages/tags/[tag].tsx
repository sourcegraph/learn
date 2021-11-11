import TagTemplate, { Props as TagTemplateProps } from '@components/templates/TagTemplate'
import MarkdownFile from '@interfaces/MarkdownFile'
import loadAllRecords from '@lib/loadAllRecords'
import collectTags from '@util/collectTags'
import filterRecordsWithTag from '@util/filterRecordsWithTag'
import getQueryParameter from '@util/getQueryParameters'
import markdownWithUrls from '@util/markdownWithUrls'
import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await loadAllRecords('posts')
    const videos = await loadAllRecords('videos')
    const tags = Array.from(collectTags(posts.concat(videos), true))
    return { paths: tags.map(tag => `/tags/${tag}`), fallback: false }
}

export const getStaticProps: GetStaticProps<TagTemplateProps> = async context => {
    const tag = getQueryParameter(context.params, 'tag')
    const posts = await loadAllRecords('posts')
    const videos = await loadAllRecords('videos')
    const allRecords = posts.concat(videos)
    const filteredRecordsWithTag = filterRecordsWithTag(allRecords, tag)
    const records = markdownWithUrls(filteredRecordsWithTag.records)
    const [ featuredRecord ] = records.slice(0,2)
    const secondaryRecords = records.slice(2,4)
    const url = `/tags/${tag}`

    return {
        props: {
            url,
            headerText: filteredRecordsWithTag.title,
            featuredRecord,
            secondaryRecords,
            records,
        },
    }
}

export default TagTemplate
