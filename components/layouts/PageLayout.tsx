import Column from '@components/atoms/Column'
import Row from '@components/atoms/Row'
import Layout, { Props as LayoutProps } from '@components/layouts/Layout'
import { FunctionComponent } from 'react'

interface Props extends LayoutProps {
    leftColumn?: React.ReactNode
    rightColumn?: React.ReactNode
}

const PageLayout: FunctionComponent<Props> = props => (
    <Layout documentTitle={props.documentTitle} appendSiteTitle={props.appendSiteTitle} metaTags={props.metaTags}>
        <Row className='medium'>
            <Column className='flex-small' width='flex-small'>{props.leftColumn}</Column>
            <Column className='flex-medium' width='flex-medium'>{props.children}</Column>
            <Column className='flex-small' width='flex-small'>{props.rightColumn}</Column>
        </Row>
    </Layout>
)

export default PageLayout
