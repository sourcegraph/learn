import AuthorCard from '@components/atoms/AuthorCard'
import Column from '@components/atoms/Column'
import AuthorCollection from '@interfaces/AuthorCollection'
import { FunctionComponent } from 'react'

import { StyledAuthorCardList } from './AuthorCardListStyles'

interface Props {
    authors: AuthorCollection[]
}

const AuthorCardList: FunctionComponent<Props> = props => (
    <StyledAuthorCardList>
        {props.authors.map(author => (
            <Column className='flex-medium' key={author.id}>
                <AuthorCard
                    name={author.name}
                    bio={author.bio}
                    id={author.id}
                    socialLinks={author.socialLinks}
                />
            </Column>
        ))}
    </StyledAuthorCardList>
)

export default AuthorCardList
