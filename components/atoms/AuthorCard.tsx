import Link from 'next/link'
import React from 'react'

interface Props {
    name: string
    bio?: string | null
    image?: string
    socialLinks?: string[] | null
    slug: string
}

const ContentCard: React.FunctionComponent<Props> = props => (
    <div className="card mb-4">
        <div className="card-body">
            <h5 className="card-title text-center">
                <Link href={`/authors/${props.slug}`}>
                    <a className="stretched-link text-dark text-decoration-none">{props.name}</a>
                </Link>
            </h5>
            {props.bio && <p className="card-text">{props.bio}</p>}
        </div>
    </div>
)

export default ContentCard
