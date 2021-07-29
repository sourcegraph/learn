import React from 'react'

import Layout, { Props as LayoutProps, MetaTags } from './Layout'

interface Props extends LayoutProps, MetaTags {
    leftColumn?: React.ReactNode
    rightColumn?: React.ReactNode
}

const PageLayout: React.FunctionComponent<Props> = props => (
    <Layout documentTitle={props.documentTitle} appendSiteTitle={props.appendSiteTitle} metaTags={props.metaTags}>
        <div className="row">
            <div className="col-12 col-xl-3">{props.leftColumn}</div>
            <div className="col-12 col-xl-6 py-5">{props.children}</div>
            <div className="col-12 col-xl-3">{props.rightColumn}</div>
        </div>
    </Layout>
)

export default PageLayout
