import Link from 'next/link'
import React from 'react'

import { AuthorDefinition } from '../util/loadCollections'

interface Props {
    name: string
    bio?: string
    image?: string
    socialLinks?: string[]
    id: string
}

const ContentCard: React.FunctionComponent<Props> = props => (
    <div className="card mb-4">
        {props.image ?
          <img src={props.image} alt="Author Avatar" className="card-img-top rounded-circle" /> :
          <img src="/authors/unisex-avatar.svg" alt="Author Avatar" className="card-img-top rounded-circle p-4" />}
        <div className="card-body">
            <h5 className="card-title text-center">
                <Link href='#'>
                    <a className="stretched-link text-dark text-decoration-none">{props.name}</a>
                </Link>
            </h5>
            {props.bio && <p className="card-text">{props.bio}</p>}
        </div>
    </div>
)

export default ContentCard
