import Column from '@components/atoms/Column'
import ContentCard from '@components/atoms/ContentCard'
import Row from '@components/atoms/Row'
import { Records } from '@interfaces/PageData'
import { FunctionComponent } from 'react'

interface Props {
    records: Records | null
    recordType: string
}

const ContentCardList: FunctionComponent<Props> = props => {
    const records = props.recordType === 'posts'
        ? props.records?.posts
        : props.records?.videos
    return (
    <Row>
        {records?.map(record => (
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
)}

export default ContentCardList
