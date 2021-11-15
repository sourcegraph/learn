import RecordIndexTemplate, { Props as RecordIndexTemplateProps } from '@components/templates/RecordIndexTemplate'
import loadAllRecords from '@lib/loadAllRecords'
import filterRecordsWithTag from '@util/filterRecordsWithTag'
import markdownWithUrls from '@util/markdownWithUrls'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps<RecordIndexTemplateProps> = async () => {
    const records = await loadAllRecords('videos')
    const videoRecords = markdownWithUrls(filterRecordsWithTag(records, 'video').records)
    const postRecords = markdownWithUrls(filterRecordsWithTag(records, 'tutorial').records)
    const url = '/videos'
    const headerText = 'Videos'

    return {
        props: {
            url,
            headerText,
            recordType: 'videos',
            videoRecords,
            postRecords,
        },
    }
}

export default RecordIndexTemplate
