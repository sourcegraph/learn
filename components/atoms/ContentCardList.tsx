import React from 'react'

import { MarkdownFileWithUrl } from '../../types/MarkdownFileWithUrl'

import ContentCard from './ContentCard'

interface Props {
    records: MarkdownFileWithUrl[]
}

const ContentCardList: React.FunctionComponent<Props> = props => (
    <div className="row row-cols-1 row-cols-lg-2">
        {props.records.map(record => (
            <div className="col" key={record.url}>
                <ContentCard
                    title={record.frontMatter.title}
                    tags={record.frontMatter.tags}
                    description={record.frontMatter.description}
                    image={record.frontMatter.image}
                    imageAlt={record.frontMatter.imageAlt}
                    url={record.url}
                    contentType='post'
                />
            </div>
        ))}
    </div>
)

export default ContentCardList
