import Link from 'next/link'
import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

import MarkdownFile from '../util/MarkdownFile'

interface Props {
    title: string
    description?: string
    members: MarkdownFile[]
    activeSlug?: string
}

const CollectionView: React.FunctionComponent<Props> = props => (
    <Card className="my-5">
        <Card.Header>This article is part of a series:</Card.Header>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            {props.description && <Card.Text>props.description</Card.Text>}
        </Card.Body>
        <div className="list-group list-group-flush list-group-numbered">
            {props.members.map((post, index) => {
                const isActive = props.activeSlug === post.slug
                const titleText = `${index + 1}. ${post.frontMatter.title}`
                if (isActive) {
                    return (
                        <div className="list-group-item list-group-item-primary" key={post.slug}>
                            {titleText}
                        </div>
                    )
                }
                return (
                    <Link href={`/${post.slug}`} key={post.slug}>
                        <a className="list-group-item list-group-item-action">{titleText}</a>
                    </Link>
                )
            })}
        </div>
    </Card>
)

export default CollectionView
