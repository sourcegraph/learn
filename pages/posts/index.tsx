import RecordIndexTemplate, { Props as RecordIndexTemplateProps } from '@components/templates/RecordIndexTemplate'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import { getPageData } from '@lib/api/getPageData'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps<RecordIndexTemplateProps> = async () => {
    const postRecords = await getPageData(10, 'posts') as MarkdownFileWithUrl[]
    const totalRecordsNumber = postRecords.length
    const url = '/posts'
    const headerText = 'Tutorials'

    return {
        props: {
            url,
            headerText,
            recordType: 'posts',
            postRecords,
            totalRecordsNumber,
        },
    }
}

export default RecordIndexTemplate
