import SignDirectionIcon from 'mdi-react/SignDirectionIcon'
import * as React from 'react'

import Layout from '../components/layouts/Layout'
import ErrorTemplate from '../components/templates/ErrorTemplate'

export const NotFoundPage: React.FunctionComponent = () => (
    <Layout>
        <ErrorTemplate />
    </Layout>
)

export default NotFoundPage
