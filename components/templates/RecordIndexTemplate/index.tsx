import Button from '@components/atoms/Button'
import ContentCardList from '@components/atoms/ContentCardList'
import Header from '@components/Header'
import PageLayout from '@components/layouts/PageLayout'
import { ThemeContext } from '@hooks/contexts/theme'
import useLoadMore from '@hooks/loadMore'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import { PageData } from '@interfaces/PageData'
import metaDataDefaults from '@lib/metaDataDefaults'
import showMoreButton from '@util/showMoreButton'
import { FunctionComponent, useContext } from 'react'

export interface Props {
    url: string
    headerText: string
    recordType: string
    videoRecords?: MarkdownFileWithUrl[]
    postRecords?: MarkdownFileWithUrl[]
    totalRecordsNumber: number
    allRecords?: PageData
}

const RecordIndexTemplate: FunctionComponent<Props> = props => {
    const metaTags = { ...metaDataDefaults, title: props.headerText, url: metaDataDefaults.url.concat(props.url) }
    const videos = props.videoRecords ?? null
    const posts = props.postRecords ?? null
    const loadMoreHook = useLoadMore(videos, posts, 10)
    const theme = useContext(ThemeContext)

    return (
        <PageLayout metaTags={metaTags}>
            <Header
                headerText={props.headerText}
                isRecordIndex={true}
            />
            <ContentCardList records={props.recordType === 'posts'
                    ? loadMoreHook.currentPosts
                    : loadMoreHook.currentVideos} />
            {showMoreButton(props.recordType, loadMoreHook, props.totalRecordsNumber) && (
                <Button 
                    onClick={() => loadMoreHook.setPage(loadMoreHook.page + 10)}
                    className='outline-primary'
                    isDark={theme.isDark}>
                    Load More
                </Button>
            )}
        </PageLayout>
    )
}

export default RecordIndexTemplate
