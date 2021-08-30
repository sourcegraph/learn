import Card from '@components/atoms/Card'
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

const ContentCard: FunctionComponent<Props> = props => {
    const isPost = props.contentType === 'post'

    return (
        <Link href={props.url} passHref={true}>
            <Card showBorder={isPost} leftAlign={isPost} href={props.url}>
                {props.image && <StyledCardImage src={props.image} alt={props.imageAlt ? props.imageAlt : ''} width="185" height="96" />}
                <StyledCardBody>
                    <StyledCardTitle>  
                        {props.title}  
                    </StyledCardTitle>
                    {props.tags && (
                        <StyledCardTagList>{props.tags?.join(' • ')}</StyledCardTagList>
                    )}
                    {props.description && <StyledCardDescription>{props.description}</StyledCardDescription>}
                </StyledCardBody>
            </Card>
        </Link> 
    )
}

export default ContentCard
