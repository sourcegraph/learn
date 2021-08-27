import Column from '@components/atoms/Column'
import ContentCardList from '@components/atoms/ContentCardList'
import Row from '@components/atoms/Row'
import Header from '@components/Header'
import Layout from '@components/layouts/Layout'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import { FunctionComponent } from 'react'

export interface Props {
    posts: MarkdownFileWithUrl[]
}

const HomepageTemplate: FunctionComponent<Props> = props => (
    <Layout>
        <Row className='medium'>
            <Header 
                showImage={true}
                headerImage='/sourcegraph-mark.svg'
                headerImageAlt='Sourcegraph Learn'
                headerText='Welcome to Sourcegraph Learn' />
            <Column className='flex-large'>
                <ContentCardList records={props.posts} />
            </Column>
        </Row>
    </Layout>
)

export default HomepageTemplate
