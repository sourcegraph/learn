import Link from 'next/link'
import React from 'react'

import AuthorAvatar from '/authors/unisex-avatar.svg'

export interface Props {
    description?: string
    image?: string
    url: string
    author?: string
    authorImage?: string
}

const ContentCard: React.FunctionComponent<Props> = props => (
    <div className="card mb-4">
        {props.authorImage ?
          <img src={props.image} alt="Author Avatar" className="card-img-top rounded-circle" /> :
          <img src="/authors/unisex-avatar.svg" alt="Author Avatar" className="card-img-top rounded-circle p-4" />}
        <div className="card-body">
            <h5 className="card-title text-center">
                <Link href={props.url}>
                    <a className="stretched-link text-dark text-decoration-none">{props.author}</a>
                </Link>
            </h5>
            {props.description && <p className="card-text">{props.description}</p>}
        </div>
    </div>
)

export default ContentCard
