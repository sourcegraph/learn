import ContentCard from '@components/atoms/ContentCard'
import SideBarRecordList from '@components/atoms/SideBarRecordList'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import { FunctionComponent } from 'react'

import { 
    StyledFeaturedContentWrapper,
    StyledFeaturedContentList,
    StyledFeaturedContentItem,
    StyledHeaderText,
} from './FeaturedContentBlockStyles'

interface Props {
    headerText: string
    featuredRecord: MarkdownFileWithUrl
    secondaryRecords: MarkdownFileWithUrl[]
}
const FeaturedContentBlock: FunctionComponent<Props> = props => (
    <>
        <StyledHeaderText>{props.headerText}</StyledHeaderText>
        <StyledFeaturedContentWrapper>
            <StyledFeaturedContentList>
                <StyledFeaturedContentItem>
                    <ContentCard 
                        title={props.featuredRecord.frontMatter.title} 
                        url={props.featuredRecord.url}
                        image={props.featuredRecord.frontMatter.image}
                        imageAlt={props.featuredRecord.frontMatter.imageAlt}
                        tags={props.featuredRecord.frontMatter.tags} />
                </StyledFeaturedContentItem>
                <li>
                    <SideBarRecordList records={props.secondaryRecords} />
                </li>
            </StyledFeaturedContentList>
        </StyledFeaturedContentWrapper>
    </>
)

export default FeaturedContentBlock
