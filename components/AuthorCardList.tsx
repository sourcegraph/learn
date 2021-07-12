import React from 'react'

import { MarkdownFileWithUrl } from '../pages'

import AuthorCard from './AuthorCard'

interface Props {
    posts: MarkdownFileWithUrl[]
}

const AuthorCardList: React.FunctionComponent<Props> = props => (
    <div className="row row-cols-1 row-cols-lg-2">
        {props.posts.map(post => (
            <div className="col" key={post.url}>
                <AuthorCard
                    description={post.frontMatter.description}
                    image={post.frontMatter.image}
                    url={post.url}
                    author={post.frontMatter.author}
                />
            </div>
        ))}
    </div>
)

export default AuthorCardList
