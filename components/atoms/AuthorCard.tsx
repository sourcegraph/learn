import Link from 'next/link'
import React from 'react'

import Card from './Card'

interface Props {
    name: string
    bio?: string | null
    image?: string
    socialLinks?: string[] | null
    id: string
}

const ContentCard: React.FunctionComponent<Props> = props => (
    <Card>
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
    </Card>
)

export default ContentCard
