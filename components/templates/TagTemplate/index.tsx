import FeaturedContentBlock from '@components/atoms/FeaturedContentBlock'
import RecordList from '@components/atoms/RecordList'
import PageLayout from '@components/layouts/PageLayout'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import metaDataDefaults from '@lib/metaDataDefaults'
import { FunctionComponent } from 'react'

export interface Props {
    url: string
    headerText: string
    featuredRecord: MarkdownFileWithUrl
    secondaryRecords: MarkdownFileWithUrl[]
    videoRecords: MarkdownFileWithUrl[]
    postRecords: MarkdownFileWithUrl[]
}

const TagTemplate: FunctionComponent<Props> = props => {
    const metaTags = { ...metaDataDefaults, title: props.headerText, url: metaDataDefaults.url.concat(props.url) }

    return (
        <PageLayout metaTags={metaTags}>
            <FeaturedContentBlock 
                featuredRecord={props.featuredRecord} 
                secondaryRecords={props.secondaryRecords}
                headerText={props.headerText} />
            <RecordList videos={props.videoRecords} posts={props.postRecords} />
        </PageLayout>
    )
}

export default TagTemplate
