import Column from '@components/atoms/Column'
import ContentCard from '@components/atoms/ContentCard'
import Row from '@components/atoms/Row'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import { FunctionComponent } from 'react'

interface Props {
    records: MarkdownFileWithUrl[] | null
}

const ContentCardList: FunctionComponent<Props> = props => (
    <Row>
        {props.records?.map(record => (
            <Column className='medium' key={record.url}>
                <ContentCard
                    title={record.frontMatter.title}
                    tags={record.frontMatter.tags}
                    image={record.frontMatter.image}
                    imageAlt={record.frontMatter.imageAlt}
                    url={record.url}
                />
            </Column>
        ))}
    </Row>
)

export default ContentCardList
