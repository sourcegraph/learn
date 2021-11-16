import Button from '@components/atoms/Button'
import LoadMoreHookObject from '@interfaces/LoadMoreHookObject'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import createRandomId from '@util/createRandomId'
import Link from 'next/link'
import { FunctionComponent } from 'react'

import {
    StyledRecord,
    StyledRecordTitle,
    StyledRecordTags,
    StyledRecordDates,
    StyledRecordAuthor,
    StyledRecordTabWrapper,
    StyledNoRecordsMessage,
} from './RecordListTabStyles'

interface Props {
    records: MarkdownFileWithUrl[] | null
    showButton: boolean
    loadMore: LoadMoreHookObject
}

const RecordListTab: FunctionComponent<Props> = props => (
        <StyledRecordTabWrapper>
            {props.records && props.records.length > 0 && (
                props.records.map((record: MarkdownFileWithUrl) => (
                    <StyledRecord key={createRandomId()}>
                        <Link href={record.url} passHref={true}>
                            <StyledRecordTitle>{record.frontMatter.title}</StyledRecordTitle>
                        </Link>
                        {record.frontMatter.publicationDate && (
                            <StyledRecordDates> Published on {record.frontMatter.publicationDate}
                                {record.frontMatter.updatedDate && (
                                    <> • Updated on {record.frontMatter.updatedDate}</>
                                )} 
                            </StyledRecordDates>
                        )}
                        {record.frontMatter.authorDisplayName && record.frontMatter.authorSlug && (
                            <StyledRecordAuthor href={`/authors/${record.frontMatter.authorSlug}`}>{record.frontMatter.authorDisplayName}</StyledRecordAuthor>
                        )}
                        <StyledRecordTags>{record.frontMatter.tags?.join(' • ')}</StyledRecordTags>
                    </StyledRecord>
                ))
            )}
            {props.showButton && (               
                <Button 
                    onClick={() => props.loadMore.setPage(props.loadMore.page + 5)}
                    className='primary'>
                    Load More
                </Button>              
            )}
            {props.records && props.records.length === 0 && (
                <StyledNoRecordsMessage>No records to display at this time.</StyledNoRecordsMessage>
            )}     
        </StyledRecordTabWrapper>
)

export default RecordListTab
