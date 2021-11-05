import RecordIndexTemplate, { Props as RecordIndexTemplateProps } from '@components/templates/RecordIndexTemplate'
import loadAllRecords from '@lib/loadAllRecords'
import omitUndefinedFields from '@util/omitUndefinedFields'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps<RecordIndexTemplateProps> = async () => {
    const records = await loadAllRecords('videos')
    const url = '/videos'
    const headerText = 'Videos'

    return {
        props: {
            url,
            headerText,
            records: records.map(record => omitUndefinedFields({ 
                ...record, 
                url: `/${record.slug}`,
            })),
        },
    }
}

export default RecordIndexTemplate
