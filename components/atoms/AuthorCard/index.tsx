import Card from '@components/atoms/Card'
import ContentCard from '@components/atoms/ContentCard'
import { FunctionComponent } from 'react'

import { StyledAuthorImage } from './AuthorCardStyles'

interface Props {
    name: string
    bio?: string | null
    image?: string
    socialLinks?: string[] | null
    id: string
}

const AuthorCard: FunctionComponent<Props> = props => (
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
