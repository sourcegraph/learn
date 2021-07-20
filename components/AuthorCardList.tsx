import React from 'react'

import { MarkdownFileWithUrl } from '../pages'
import { AuthorDefinition } from '../util/loadCollections'

import AuthorCard from './AuthorCard'

interface Props {
    authors: AuthorDefinition[]
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
