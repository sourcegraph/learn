import Column from '@components/atoms/Column'
import ContentCard from '@components/atoms/ContentCard'
import Row from '@components/atoms/Row'
import React from 'react'

import { MarkdownFileWithUrl } from '../../../types/MarkdownFileWithUrl'

interface Props {
    records: MarkdownFileWithUrl[]
}

const ContentCardList: React.FunctionComponent<Props> = props => (
    <Row>
        {props.records.map(record => (
            <Column className='flex-medium' width='flex-medium' key={record.url}>
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
