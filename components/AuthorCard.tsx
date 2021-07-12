import Link from 'next/link'
import React from 'react'

import AuthorAvatar from '/authors/unisex-avatar.svg'

export interface Props {
    title: string
    tags?: string[]
    description?: string
    image?: string
    url: string
    author?: string
    authorImage?: string
}

const ContentCard: React.FunctionComponent<Props> = props => (
    <div className="card mb-4">
        {props.authorImage ?
          <img src={props.image} alt="Author Avatar" className="card-img-top" /> :
          <img src="/authors/unisex-avatar.svg" alt="Author Avatar" className="card-img-top" />}
        <div className="card-body">
            <h5 className="card-title">
                <Link href={props.url}>
                    <a className="stretched-link text-dark text-decoration-none">{props.title}</a>
                </Link>
            </h5>
            {props.tags && (
                <p className="card-subtitle mb-2 text-muted small text-capitalize">{props.tags?.join(' • ')}</p>
            )}
            {props.description && <p className="card-text">{props.description}</p>}
        </div>
    </div>
)

export default ContentCard
