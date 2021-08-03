import Link from 'next/link'
import React from 'react'

import Card from '../Card'

import {
    StyledCardBody,
    StyledCardTitle,
    StyledCardLink,
    StyledCardTagList,
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

const ContentCard: React.FunctionComponent<Props> = props => (
    <Card showBorder={props.contentType === 'post'}>
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
            {props.description && <p>{props.description}</p>}
        </StyledCardBody>
    </Card>
)

export default ContentCard
