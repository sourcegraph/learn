import Layout from '@components/layouts/Layout'
import ErrorTemplate from '@components/templates/ErrorTemplate'
import { FunctionComponent } from 'react'

export const NotFoundPage: FunctionComponent = () => (
    <Layout>
        <ErrorTemplate />
    </Layout>
)

export default NotFoundPage
