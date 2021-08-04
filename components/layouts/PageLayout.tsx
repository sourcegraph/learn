import React from 'react'

import Layout, { Props as LayoutProps, MetaTags } from './Layout'

interface Props extends LayoutProps {
    leftColumn?: React.ReactNode
    rightColumn?: React.ReactNode
}

const PageLayout: React.FunctionComponent<Props> = props => (
    <Layout documentTitle={props.documentTitle} appendSiteTitle={props.appendSiteTitle} metaTags={props.metaTags}>
        <div className="flex-row">
            <div className="col small-flex">{props.leftColumn}</div>
            <div className="col medium-flex">{props.children}</div>
            <div className="col small-flex">{props.rightColumn}</div>
        </div>
    </Layout>
)

export default PageLayout
