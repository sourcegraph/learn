import React from 'react'

import AuthorCollection from '../../interfaces/AuthorCollection'

import AuthorCard from './AuthorCard'

interface Props {
    authors: AuthorCollection[]
}

const AuthorCardList: React.FunctionComponent<Props> = props => (
    <div className="row row-cols-1 row-cols-lg-2">
        {props.authors?.map(author => (
            <div className="col" key={author.slug}>
                <AuthorCard
                    name={author.name}
                    bio={author.bio}
                    slug={author.slug}
                    socialLinks={author.socialLinks}
                />
            </div>
        ))}
    </div>
)

export default AuthorCardList
