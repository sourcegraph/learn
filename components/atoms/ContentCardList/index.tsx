import Column from '@components/atoms/Column'
import ContentCard from '@components/atoms/ContentCard'
import Row from '@components/atoms/Row'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import { FunctionComponent } from 'react'

interface Props {
    records: MarkdownFileWithUrl[]
}

const ContentCardList: FunctionComponent<Props> = props => (
    <Row>
        {props.records.map(record => (
            <Column className='medium' key={record.url}>
                <ContentCard
                    title={record.frontMatter.title}
                    tags={record.frontMatter.tags}
                    description={record.frontMatter.description}
                    image={record.frontMatter.image}
                    imageAlt={record.frontMatter.imageAlt}
                    url={record.url}
                    contentType='post'
                />
            </Column>
        ))}
    </Row>
)

export default ContentCardList
