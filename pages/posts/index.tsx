import RecordIndexTemplate, { Props as RecordIndexTemplateProps } from '@components/templates/RecordIndexTemplate'
import loadAllRecords from '@lib/loadAllRecords'
import filterRecordsWithTag from '@util/filterRecordsWithTag'
import markdownWithUrls from '@util/markdownWithUrls'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps<RecordIndexTemplateProps> = async () => {
    const records = await loadAllRecords('posts')
    const postRecords = markdownWithUrls(filterRecordsWithTag(records, 'tutorial').records)
    const url = '/posts'
    const headerText = 'Tutorials'

    return {
        props: {
            url,
            headerText,
            recordType: 'posts',
            postRecords,
        },
    }
}

export default RecordIndexTemplate
