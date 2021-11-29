import TagTemplate, { Props as TagTemplateProps } from '@components/templates/TagTemplate'
import { PageData } from '@interfaces/PageData'
import { getPageData } from '@lib/api/getPageData'
import collectTags from '@util/collectTags'
import filterRecordsWithTag from '@util/filterRecordsWithTag'
import getQueryParameter from '@util/getQueryParameters'
import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
    const allRecords = await getPageData() as PageData
    const posts = allRecords.records.posts
    const videos = allRecords.records.videos
    const tags = videos
        ? collectTags(posts?.concat(videos), true)
        : collectTags(posts, true)
    const tagArray = Array.from(tags)
    return { paths: tagArray.map(tag => `/tags/${tag}`), fallback: false }
}

export const getStaticProps: GetStaticProps<TagTemplateProps> = async context => {
    const tag = getQueryParameter(context.params, 'tag')
    const allRecords = await getPageData() as PageData
    const posts = allRecords.records.posts
    const videos = allRecords.records.videos
    const records = videos
        ? posts?.concat(videos)
        : posts
    const filteredRecordsWithTag = filterRecordsWithTag(records ?? [], tag)
    const [ featuredRecord ] = filteredRecordsWithTag.records.slice(0,2)
    const secondaryRecords = filteredRecordsWithTag.records.slice(2,4)
    const filteredVideoRecords = filteredRecordsWithTag.records.filter(record => record.frontMatter.tags.includes('video'))
    const filteredPostRecords = filteredRecordsWithTag.records.filter(record => record.frontMatter.tags.includes('tutorial'))
    const videoRecords = filteredVideoRecords.slice(0, 5)
    const postRecords = filteredPostRecords.slice(0, 5)
    const totalVideosNumber = filteredVideoRecords.length
    const totalPostsNumber = filteredPostRecords.length
    const url = `/tags/${tag}`

    return {
        props: {
            url,
            headerText: filteredRecordsWithTag.title,
            featuredRecord,
            secondaryRecords,
            videoRecords,
            postRecords,
            totalVideosNumber,
            totalPostsNumber,
            tag,
        },
    }
}

export default TagTemplate
