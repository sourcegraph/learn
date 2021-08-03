import React from 'react'

import AuthorCollection from '../../../interfaces/AuthorCollection'
import AuthorCard from '../AuthorCard'

import { StyledAuthorCardList } from './AuthorCardListStyles'

interface Props {
    authors: AuthorCollection[]
}

const AuthorCardList: React.FunctionComponent<Props> = props => (
    <StyledAuthorCardList>
        {props.authors.map(author => (
            <div className="col" key={author.id}>
                <AuthorCard
                    name={author.name}
                    bio={author.bio}
                    id={author.id}
                    socialLinks={author.socialLinks}
                />
            </div>
        ))}
    </StyledAuthorCardList>
)

export default AuthorCardList
