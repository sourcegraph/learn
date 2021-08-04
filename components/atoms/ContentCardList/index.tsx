import React from 'react'

import { MarkdownFileWithUrl } from '../../../types/MarkdownFileWithUrl'
import Column from '../Column'
import ContentCard from '../ContentCard'
import Row from '../Row'

interface Props {
    records: MarkdownFileWithUrl[]
}

const ContentCardList: React.FunctionComponent<Props> = props => (
    <Row>
        {props.records.map(record => (
            <Column flex={true} width='flex-medium' key={record.url}>
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
