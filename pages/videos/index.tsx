import RecordIndexTemplate, { Props as RecordIndexTemplateProps } from '@components/templates/RecordIndexTemplate'
import { PageData } from '@interfaces/PageData'
import { getPageData } from '@lib/api/getPageData'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps<RecordIndexTemplateProps> = async () => {
    const allRecords = await getPageData() as PageData
    const videoRecords = allRecords.records.videos?.slice(0, 10)
    const totalRecordsNumber = allRecords.records.videos?.length ?? 0
    const url = '/videos'
    const headerText = 'Videos'

    return {
        props: {
            url,
            headerText,
            recordType: 'videos',
            videoRecords,
            totalRecordsNumber,
        },
    }
}

export default RecordIndexTemplate
