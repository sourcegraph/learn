import CardLink from '@components/atoms/CardLink'
import Link from 'next/link'
import { FunctionComponent } from 'react'

import {
    StyledCardBody,
    StyledCardTitle,
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

const ContentCard: FunctionComponent<Props> = props => (
    <Link href={props.url} passHref={true}>
        <CardLink href={props.url}>
        {props.image && 
        <StyledCardImage 
            src={props.image} 
            alt={props.imageAlt ?
                props.imageAlt
                : ''} 
            width="185" 
            height="96" />}
            <StyledCardBody>
                <StyledCardTitle>  
                    {props.title}  
                </StyledCardTitle>
                {props.tags && (
                    <StyledCardTagList>{props.tags?.join(' • ')}</StyledCardTagList>
                )}
                {props.description && <StyledCardDescription>{props.description}</StyledCardDescription>}
            </StyledCardBody>
        </CardLink>
    </Link> 
)

export default ContentCard
