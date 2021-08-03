import Link from 'next/link'
import React from 'react'

import Card from '../Card'

import {
    StyledAuthorCardBody,
    StyledAuthorCardTitle,
    StyledAuthorCardLink,
    StyledAuthorImage,
} from './AuthorCardStyles'

interface Props {
    name: string
    bio?: string | null
    image?: string
    socialLinks?: string[] | null
    id: string
}

const AuthorCard: React.FunctionComponent<Props> = props => (
    <Card>
        <StyledAuthorImage src="/authors/unisex-avatar.svg" alt="Author Avatar" />
        <StyledAuthorCardBody>
            <StyledAuthorCardTitle>
                <Link href="/authors" passHref={true}>
                    <StyledAuthorCardLink>{props.name}</StyledAuthorCardLink>
                </Link>
            </StyledAuthorCardTitle>
            {props.bio && <p>{props.bio}</p>}
        </StyledAuthorCardBody>
    </Card>
)

export default AuthorCard
