import TagTemplate, { Props as TagTemplateProps } from '@components/templates/TagTemplate'
import loadAllRecords from '@lib/loadAllRecords'
import collectTags from '@util/collectTags'
import getQueryParameter from '@util/getQueryParameters'
import omitUndefinedFields from '@util/omitUndefinedFields'
import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await loadAllRecords('posts')
    const videos = await loadAllRecords('videos')
    const tags = collectTags(posts.concat(videos))
    return { paths: tags.map(tag => `/tags/${tag}`), fallback: false }
}

export const getStaticProps: GetStaticProps<TagTemplateProps> = async context => {
    const tag = getQueryParameter(context.params, 'tag').toLowerCase()
    const posts = await loadAllRecords('posts')
    const videos = await loadAllRecords('videos')
    const allRecords = posts.concat(videos)
    const filteredRecords = allRecords.filter(record => collectTags([record]).includes(tag))

    return {
        props: {
            tag,
            records: filteredRecords.map(record => omitUndefinedFields({ 
                ...record, 
                url: `/${record.slug}`,
            })),
        },
    }
}

export default TagTemplate
