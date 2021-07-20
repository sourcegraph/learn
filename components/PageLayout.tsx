import React from 'react'

import Layout, { MetaTags } from './Layout'

interface Props {
    title?: string
    contentTitle?: string
    children: React.ReactNode
    leftColumn?: React.ReactNode
    rightColumn?: React.ReactNode
    metaTags?: MetaTags
}

const PageLayout: React.FunctionComponent<Props> = props => (
    <Layout title={props.title} contentTitle={props.contentTitle} metaTags={props.metaTags}>
        <div className="row">
            <div className="col-12 col-xl-3">{props.leftColumn}</div>
            <div className="col-12 col-xl-6 py-5">{props.children}</div>
            <div className="col-12 col-xl-3">{props.rightColumn}</div>
        </div>
    </Layout>
)

export default PageLayout
