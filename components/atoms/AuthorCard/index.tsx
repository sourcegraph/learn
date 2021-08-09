import React from 'react'

import Card from '../Card'
import ContentCard from '../ContentCard'

import { StyledAuthorImage } from './AuthorCardStyles'

interface Props {
    name: string
    bio?: string | null
    image?: string
    socialLinks?: string[] | null
    id: string
}

const AuthorCard: React.FunctionComponent<Props> = props => (
    <Card showBorder={true}>
        <StyledAuthorImage src="/authors/unisex-avatar.svg" alt="Author Avatar" />
        <ContentCard
            title={props.name}
            url="/authors"
            description={props.bio}
        />
    </Card>
)

export default AuthorCard
