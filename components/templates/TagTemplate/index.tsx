import Button from '@components/atoms/Button'
import ContentCardList from '@components/atoms/ContentCardList'
import FeaturedContentBlock from '@components/atoms/FeaturedContentBlock'
import RecordList from '@components/atoms/RecordList'
import PageLayout from '@components/layouts/PageLayout'
import useLoadMore from '@hooks/loadMore'
import MarkdownFile from '@interfaces/MarkdownFile'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import metaDataDefaults from '@lib/metaDataDefaults'
import { FunctionComponent } from 'react'

export interface Props {
    url: string
    headerText: string
    featuredRecord: MarkdownFileWithUrl
    secondaryRecords: MarkdownFileWithUrl[]
    records: MarkdownFileWithUrl[]
}

const TagTemplate: FunctionComponent<Props> = props => {
    const metaTags = { ...metaDataDefaults, title: props.headerText, url: metaDataDefaults.url.concat(props.url) }
    const loadMoreHook = useLoadMore(props.records, 10)

    return (
        <PageLayout metaTags={metaTags}>
            <FeaturedContentBlock 
                featuredRecord={props.featuredRecord} 
                secondaryRecords={props.secondaryRecords}
                headerText={props.headerText} />
            <RecordList records={loadMoreHook.currentRecords} />
            {props.records.length > 10 && loadMoreHook.records.length !== loadMoreHook.currentRecords.length && (
                <Button 
                    onClick={() => loadMoreHook.setPage(loadMoreHook.page + 10)}
                    className='primary'>
                    Load More
                </Button>
            )}
        </PageLayout>
    )
}

export default TagTemplate
