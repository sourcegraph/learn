import Card from '@components/atoms/Card'
import ContentCard from '@components/atoms/ContentCard'
import { FunctionComponent } from 'react'

interface Props {
    name: string
    bio?: string | null
    image?: string
    socialLinks?: string[] | null
    slug: string
}

const AuthorCard: FunctionComponent<Props> = props => (
    <Card showBorder={false} width='90'>
        <ContentCard
            title={props.name}
            url={`/authors/${props.slug}`}
            description={props.bio}
        />
    </Card>
)

export default AuthorCard
