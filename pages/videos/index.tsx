import ArticleListTemplate, { Props as ArticleListTemplateProps } from '@components/templates/ArticleListTemplate'
import loadAllRecords from '@lib/loadAllRecords'
import omitUndefinedFields from '@util/omitUndefinedFields'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps<ArticleListTemplateProps> = async () => {
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

export default ArticleListTemplate
