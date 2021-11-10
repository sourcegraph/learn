import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import createRandomId from '@util/createRandomId'
import { FunctionComponent } from 'react'

import {
    StyledRecordWrapper,
    StyledRecord,
    StyledRecordTitle,
    StyledRecordTags,
    StyledRecordNav,
    StyledRecordNavLink,
    StyledRecordDates,
    StyledRecordAuthor,
} from './RecordListStyles'

interface Props {
    records: MarkdownFileWithUrl[]
}

const RecordList: FunctionComponent<Props> = props => (
    <StyledRecordWrapper>
        <StyledRecordNav>
            <StyledRecordNavLink>Posts</StyledRecordNavLink>
            <StyledRecordNavLink>Videos</StyledRecordNavLink>
        </StyledRecordNav>
        {props.records.map(record => (
            <StyledRecord key={createRandomId()}>
                <StyledRecordTitle>{record.frontMatter.title}</StyledRecordTitle>
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
        ))}
    </StyledRecordWrapper>
)

export default RecordList
