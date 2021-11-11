import RecordListTab from '@components/atoms/RecordListTab'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import filterRecordsWithTag from '@util/filterRecordsWithTag'
import markdownWithUrls from '@util/markdownWithUrls'
import { FunctionComponent, useState, useRef, RefObject } from 'react'

import {
    StyledRecordWrapper,
    StyledRecordNav,
    StyledRecordNavLink,
} from './RecordListStyles'

interface Props {
    records: MarkdownFileWithUrl[]
}

const RecordList: FunctionComponent<Props> = props => {
    const [showTab, setShowTab] = useState<string>('posts')
    const videos = markdownWithUrls(filterRecordsWithTag(props.records, 'video').records)
    const posts = markdownWithUrls(filterRecordsWithTag(props.records, 'tutorial').records)
    const isPosts = showTab === 'posts'

    return (
        <StyledRecordWrapper>
            <StyledRecordNav>
                <StyledRecordNavLink active={isPosts} onClick={() => setShowTab('posts')}>Posts</StyledRecordNavLink>
                <StyledRecordNavLink active={!isPosts} onClick={() => setShowTab('videos')}>Videos</StyledRecordNavLink>
            </StyledRecordNav>
                {showTab === 'posts' ?
                (
                    <RecordListTab records={posts}/>
                ) :
                (
                    <RecordListTab records={videos}/>
                )}
        </StyledRecordWrapper>
    )
}

export default RecordList
