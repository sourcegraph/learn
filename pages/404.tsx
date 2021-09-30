import Layout from '@components/layouts/Layout'
import ErrorTemplate from '@components/templates/ErrorTemplate'
import metaDataDefaults from '@lib/metaDataDefaults'
import { FunctionComponent } from 'react'

export const NotFoundPage: FunctionComponent = () => (
    <Layout metaTags={metaDataDefaults}>
        <ErrorTemplate />
    </Layout>
)

export default NotFoundPage
