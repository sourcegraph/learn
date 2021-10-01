import ContentCardList from '@components/atoms/ContentCardList'
import Header from '@components/Header'
import PageLayout from '@components/layouts/PageLayout'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import metaDataDefaults from '@lib/metaDataDefaults'
import { FunctionComponent } from 'react'

export interface Props {
    url: string
    headerText: string
    records: MarkdownFileWithUrl[]
}

const ArticleListTemplate: FunctionComponent<Props> = props => {
    const metaTags = { ...metaDataDefaults, title: props.headerText, url: metaDataDefaults.url.concat(props.url) }

    return (
        <PageLayout metaTags={metaTags}>
            <Header
                headerText={props.headerText}
            />
            <ContentCardList records={props.records} />
        </PageLayout>
    )
}

export default ArticleListTemplate
