import ContentCard from '@components/atoms/ContentCard'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import createRandomId from '@util/createRandomId'
import { FunctionComponent } from 'react'

import {
    StyledSideBarRecordWrapper,
    StyledSideBarRecord,
} from './SideBarRecordListStyles'

interface Props {
    records: MarkdownFileWithUrl[]
}

const SideBarRecordList: FunctionComponent<Props> = props => (
    <StyledSideBarRecordWrapper>
        {props.records.map(record => (
            <StyledSideBarRecord key={createRandomId()}>
                <ContentCard 
                    title={record.frontMatter.title} 
                    url={record.url}
                    tags={record.frontMatter.tags}
                    setHeight={true} />
            </StyledSideBarRecord>
        ))}
    </StyledSideBarRecordWrapper>
)

export default SideBarRecordList
