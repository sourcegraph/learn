import ArticleListTemplate, { Props as ArticleListTemplateProps } from '@components/templates/ArticleListTemplate'
import loadAllRecords from '@lib/loadAllRecords'
import collectTags from '@util/collectTags'
import getQueryParameter from '@util/getQueryParameters'
import omitUndefinedFields from '@util/omitUndefinedFields'
import sluggify from '@util/sluggify'
import startCase from 'lodash/startCase'
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
