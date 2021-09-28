import ContentCard from '@components/atoms/ContentCard'
import Row from '@components/atoms/Row'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import { FunctionComponent } from 'react'

import { 
    StyledCardContainerHeader,
    StyledCardContainerDescription,
    StyledContentCardContainerWrapper,
    StyledContentCardContainerCards,
} from './ContentCardContainerStyles'

interface Props {
    records: MarkdownFileWithUrl[]
    header: string
    description: string
}

const ContentCardContainer: FunctionComponent<Props> = props => (
    <Row>
        <StyledContentCardContainerWrapper>
            <StyledCardContainerHeader>
                {props.header}
            </StyledCardContainerHeader>
            <StyledCardContainerDescription>
                {props.description}
            </StyledCardContainerDescription>
            <StyledContentCardContainerCards>
            {props.records.map(record => (
                <ContentCard
                    title={record.frontMatter.title}
                    tags={record.frontMatter.tags}
                    image={record.frontMatter.image}
                    imageAlt={record.frontMatter.imageAlt}
                    url={record.url}
                    key={record.url}
                    contentType='post'
                />
            ))}
            </StyledContentCardContainerCards>
        </StyledContentCardContainerWrapper>
    </Row>
)

export default ContentCardContainer
