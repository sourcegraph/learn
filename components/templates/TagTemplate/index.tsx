import ContentCardList from '@components/atoms/ContentCardList'
import Header from '@components/Header'
import PageLayout from '@components/layouts/PageLayout'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import metaDataDefaults from '@lib/metaDataDefaults'
import startCase from 'lodash/startCase'
import { FunctionComponent } from 'react'

export interface Props {
    tag: string
    records: MarkdownFileWithUrl[]
}

const TagTemplate: FunctionComponent<Props> = props => {
    const tagName = startCase(props.tag)
    const metaTags = { ...metaDataDefaults, title: `Records tagged with ${tagName}` }

    return (
        <PageLayout metaTags={metaTags}>
            <Header
                headerText={`Records tagged with ${tagName}`}
            />
            <ContentCardList records={props.records} />
        </PageLayout>
    )
}

export default TagTemplate
