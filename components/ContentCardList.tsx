import React from 'react'

import { MarkdownFileWithUrl } from '../pages'

import ContentCard from './ContentCard'

interface Props {
    posts: MarkdownFileWithUrl[]
}

const ContentCardList: React.FunctionComponent<Props> = props => (
    <div className="row row-cols-1 row-cols-lg-2">
        {props.posts.map(post => (
            <div className="col" key={post.url}>
                <ContentCard
                    title={post.frontMatter.title}
                    tags={post.frontMatter.tags}
                    description={post.frontMatter.description}
                    image={post.frontMatter.image}
                    url={post.url}
                />
            </div>
        ))}
    </div>
)

export default ContentCardList
