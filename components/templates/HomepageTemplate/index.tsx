import Column from '@components/atoms/Column'
import ContentCardContainer from '@components/atoms/ContentCardContainer'
import Row from '@components/atoms/Row'
import Header from '@components/Header'
import Layout from '@components/layouts/Layout'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import { FunctionComponent } from 'react'

export interface Props {
    searchPosts: MarkdownFileWithUrl[]
    videoPosts: MarkdownFileWithUrl[]
}

const HomepageTemplate: FunctionComponent<Props> = props => (
    <Layout>
        <Row className='medium'>
            <Header 
                showImage={true}
                headerImage='https://storage.googleapis.com/sourcegraph-assets/learn/logos/sourcegraph-mark.svg'
                headerImageAlt='Sourcegraph Learn'
                headerText='Welcome to Sourcegraph Learn' />
            <Column className='flex-large'>
                <ContentCardContainer 
                    records={props.searchPosts} 
                    header='Search'
                    description='Learn about search principles with these guides' />
            </Column>
            <Column className='flex-large'>
                <ContentCardContainer 
                    records={props.videoPosts} 
                    header='Video'
                    description='Follow along with these video resources' />
            </Column>
        </Row>
    </Layout>
)

export default HomepageTemplate
