import Layout from '@components/layouts/Layout'
import ErrorTemplate from '@components/templates/ErrorTemplate'
import * as React from 'react'

export const NotFoundPage: React.FunctionComponent = () => (
    <Layout>
        <ErrorTemplate />
    </Layout>
)

export default NotFoundPage
