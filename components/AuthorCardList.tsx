import React from 'react'

import AuthorCollectionDefinition from '../util/AuthorCollectionDefinition'

import AuthorCard from './AuthorCard'

interface Props {
    authors: AuthorCollectionDefinition[]
}

const AuthorCardList: React.FunctionComponent<Props> = props => (
    <div className="row row-cols-1 row-cols-lg-2">
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
    </div>
)

export default AuthorCardList
