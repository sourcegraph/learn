import Button from '@components/atoms/Button'
import ContentCardList from '@components/atoms/ContentCardList'
import Header from '@components/Header'
import PageLayout from '@components/layouts/PageLayout'
import useLoadMore from '@hooks/loadMore'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import metaDataDefaults from '@lib/metaDataDefaults'
import showMoreButton from '@util/showMoreButton'
import { FunctionComponent } from 'react'

export interface Props {
    url: string
    headerText: string
    recordType: string
    videoRecords?: MarkdownFileWithUrl[]
    postRecords?: MarkdownFileWithUrl[]
}

const RecordIndexTemplate: FunctionComponent<Props> = props => {
    const metaTags = { ...metaDataDefaults, title: props.headerText, url: metaDataDefaults.url.concat(props.url) }
    const videos = props.videoRecords ?? null
    const posts = props.postRecords ?? null
    const loadMoreHook = useLoadMore(videos, posts, 10)

    return (
        <PageLayout metaTags={metaTags}>
            <Header
                headerText={props.headerText}
                isRecordIndex={true}
            />
            <ContentCardList records={props.recordType === 'posts'
                ? loadMoreHook.currentPosts
                : loadMoreHook.currentVideos} />
            {showMoreButton(videos, posts, props.recordType, loadMoreHook) && (
                <Button 
                    onClick={() => loadMoreHook.setPage(loadMoreHook.page + 10)}
                    className='primary'>
                    Load More
                </Button>
            )}
        </PageLayout>
    )
}

export default RecordIndexTemplate
