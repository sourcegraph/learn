import SignDirectionIcon from 'mdi-react/SignDirectionIcon'
import * as React from 'react'

import Layout from '../components/layouts/Layout'

export const NotFoundPage: React.FunctionComponent<{
    location: { pathname: string }
}> = props => (
    <Layout>
        <div className="container center error-page text-dark">
            <div>
                <div>
                    <SignDirectionIcon />
                </div>
            </div>
            <h1>404: Not Found</h1>
            <p className="text-center">
                The requested URL was not found. <br /> Return to{' '}
                <a href="https://learn.sourcegraph.com">Sourcegraph Learn</a>
            </p>
        </div>
    </Layout>
)

export default NotFoundPage
