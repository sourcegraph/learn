import RecordIndexTemplate, { Props as RecordIndexTemplateProps } from '@components/templates/RecordIndexTemplate'
import { PageData } from '@interfaces/PageData'
import { getPageData } from '@lib/api/getPageData'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps<RecordIndexTemplateProps> = async () => {
    const totalRecords = await getPageData() as PageData
    const postRecords = totalRecords.records.posts?.slice(0, 10)
    const totalRecordsNumber = totalRecords.records.posts?.length ?? 0
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
