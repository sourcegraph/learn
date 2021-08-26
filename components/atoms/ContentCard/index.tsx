import Card from '@components/atoms/Card'
import Link from 'next/link'
import { FunctionComponent } from 'react'

import {
    StyledCardBody,
    StyledCardTitle,
    StyledCardLink,
    StyledCardTagList,
    StyledCardDescription,
    StyledCardImage,
} from './ContentCardStyles'

export interface Props {
    title: string
    tags?: string[] | null
    description?: string | null
    image?: string | null
    imageAlt?: string | null
    url: string
    contentType?: string | null
}

const ContentCard: FunctionComponent<Props> = props => {
    const isPost = props.contentType === 'post'

    return (
        <Card showBorder={isPost} leftAlign={isPost}>
            {props.image && <StyledCardImage src={props.image} alt={props.imageAlt ? props.imageAlt : ''} width="185" height="96" />}
            <StyledCardBody>
                <StyledCardTitle>
                    <Link href={props.url} passHref={true}>
                        <StyledCardLink>{props.title}</StyledCardLink>
                    </Link>
                </StyledCardTitle>
                {props.tags && (
                    <StyledCardTagList>{props.tags?.join(' • ')}</StyledCardTagList>
                )}
                {props.description && <StyledCardDescription>{props.description}</StyledCardDescription>}
            </StyledCardBody>
        </Card>
    )
}

export default ContentCard
