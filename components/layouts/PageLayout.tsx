import Column from '@components/atoms/Column'
import Row from '@components/atoms/Row'
import Layout, { Props as LayoutProps } from '@components/layouts/Layout'
import { FunctionComponent } from 'react'

interface Props extends LayoutProps {
    leftColumn?: React.ReactNode
    rightColumn?: React.ReactNode
    bannerColumn?: React.ReactNode
}

const PageLayout: FunctionComponent<Props> = props => (
    <Layout metaTags={props.metaTags}>
        <Row className='medium'>
            {props.bannerColumn && (
                <Column className='flex-small-full'>{props.bannerColumn}</Column>
            )}
            <Column className='flex-small'>{props.leftColumn}</Column>
            <Column className='flex-medium'>{props.children}</Column>
            <Column className='flex-small'>{props.rightColumn}</Column>
        </Row>
    </Layout>
)

export default PageLayout
