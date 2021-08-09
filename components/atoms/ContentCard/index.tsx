import Link from 'next/link'
import React from 'react'

import Card from '../Card'

import {
    StyledCardBody,
    StyledCardTitle,
    StyledCardLink,
    StyledCardTagList,
    StyledCardDescription,
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

const ContentCard: React.FunctionComponent<Props> = props => {
    const isPost = props.contentType === 'post'

    return (
        <Card showBorder={isPost} leftAlign={isPost}>
            {props.image && <img src={props.image} alt={props.imageAlt ? props.imageAlt : ''} />}
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
