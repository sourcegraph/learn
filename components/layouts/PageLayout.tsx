import React from 'react'

import Column from '../atoms/Column'
import Row from '../atoms/Row'

import Layout, { Props as LayoutProps, MetaTags } from './Layout'

interface Props extends LayoutProps {
    leftColumn?: React.ReactNode
    rightColumn?: React.ReactNode
}

const PageLayout: React.FunctionComponent<Props> = props => (
    <Layout documentTitle={props.documentTitle} appendSiteTitle={props.appendSiteTitle} metaTags={props.metaTags}>
        <Row>
            <Column flex={true} width='flex-small'>{props.leftColumn}</Column>
            <Column flex={true} width='flex-medium'>{props.children}</Column>
            <Column flex={true} width='flex-small'>{props.rightColumn}</Column>
        </Row>
    </Layout>
)

export default PageLayout
