import Button from '@components/atoms/Button'
import Column from '@components/atoms/Column'
import ContentCardContainer from '@components/atoms/ContentCardContainer'
import Row from '@components/atoms/Row'
import Header from '@components/Header'
import Layout from '@components/layouts/Layout'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import metaDataDefaults from '@lib/metaDataDefaults'
import { FunctionComponent } from 'react'

export interface Props {
    searchPosts: MarkdownFileWithUrl[]
    sourcegraphPosts: MarkdownFileWithUrl[]
}

const HomepageTemplate: FunctionComponent<Props> = props => (
    <Layout metaTags={metaDataDefaults}>
        <Row className='medium'>
            <Header
                headerImage='https://storage.googleapis.com/sourcegraph-assets/learn/logos/sourcegraph-mark.svg'
                headerImageAlt='Sourcegraph Learn'
                headerText='Welcome to Sourcegraph Learn'
                isHomepage={true} />
            <Column className='flex-large width'>
                <ContentCardContainer 
                    records={props.searchPosts} 
                    header='Code search'
                    description='Learn about search principles with these guides' />
                    <Column className='centered'>
                        <Button className='outline-primary' href='/tags/search'>
                            Load more
                        </Button>
                    </Column>
            </Column>
            <Column className='flex-large width'>
                <ContentCardContainer 
                    records={props.sourcegraphPosts} 
                    header='Sourcegraph'
                    description='Search all of your code and open source' />
                    <Column className='centered'>
                        <Button className='outline-primary' href='/tags/sourcegraph'>
                            Load more
                        </Button>
                    </Column>
            </Column>
        </Row>
    </Layout>
)

export default HomepageTemplate
