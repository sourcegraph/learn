import TagTemplate, { Props as TagTemplateProps } from '@components/templates/TagTemplate'
import loadAllRecords from '@lib/loadAllRecords'
import collectTags from '@util/collectTags'
import filterRecordsWithTag from '@util/filterRecordsWithTag'
import getQueryParameter from '@util/getQueryParameters'
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
    const [ featuredRecord ] = filteredRecordsWithTag.records.slice(0,2)
    const secondaryRecords = filteredRecordsWithTag.records.slice(2,4)
    const videoRecords = filterRecordsWithTag(filteredRecordsWithTag.records, 'video').records
    const postRecords = filterRecordsWithTag(filteredRecordsWithTag.records, 'tutorial').records
    const url = `/tags/${tag}`

    return {
        props: {
            url,
            headerText: filteredRecordsWithTag.title,
            featuredRecord,
            secondaryRecords,
            videoRecords,
            postRecords,
        },
    }
}

export default TagTemplate
