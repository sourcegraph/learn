import Card from '@components/atoms/Card'
import ContentCard from '@components/atoms/ContentCard'
import { FunctionComponent } from 'react'

interface Props {
    name: string
    bio?: string | null
    image?: string
    socialLinks?: string[] | null
    id: string
}

const AuthorCard: FunctionComponent<Props> = props => (
    <Card showBorder={false} width='90'>
        <ContentCard
            title={props.name}
            url="/authors"
        />
    </Card>
)

export default AuthorCard
