import RecordListTab from '@components/atoms/RecordListTab'
import useLoadMore from '@hooks/loadMore'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import showMoreButton from '@util/showMoreButton'
import { FunctionComponent, useState } from 'react'

import {
    StyledRecordWrapper,
    StyledRecordNav,
    StyledRecordNavLink,
} from './RecordListStyles'

interface Props {
    videos: MarkdownFileWithUrl[]
    posts: MarkdownFileWithUrl[]
    totalVideosNumber: number
    totalPostsNumber: number
    tag: string
}

const RecordList: FunctionComponent<Props> = props => {
    const [showTab, setShowTab] = useState<string>('posts')
    const isPosts = showTab === 'posts'
    const loadMoreHook = useLoadMore(props.videos, props.posts, 5, props.tag)

    return (
        <StyledRecordWrapper>
            <StyledRecordNav>
                <StyledRecordNavLink active={isPosts} onClick={() => setShowTab('posts')}>Posts</StyledRecordNavLink>
                <StyledRecordNavLink active={!isPosts} onClick={() => setShowTab('videos')}>Videos</StyledRecordNavLink>
            </StyledRecordNav>
                {isPosts ?
                (
                    <RecordListTab
                        records={loadMoreHook.currentPosts}
                        showButton={showMoreButton('posts', loadMoreHook, props.totalPostsNumber)}
                        loadMore={loadMoreHook} />
                ) :
                (
                    <RecordListTab
                        records={loadMoreHook.currentVideos}
                        showButton={showMoreButton('videos', loadMoreHook, props.totalVideosNumber)}
                        loadMore={loadMoreHook} />
                )}
        </StyledRecordWrapper>
    )
}

export default RecordList
