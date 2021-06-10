import React from 'react'
import Link from 'next/link'

interface Props {
    title: string
    tags?: string[]
    description?: string
    image?: string
    url: string
}

const Card = (props: Props) => (
    <div className="card mb-4">
        {props.image && <img src={props.image} className="card-img-top" />}
        <div className="card-body">
            <h5 className="card-title">
                <Link href={props.url}>
                    <a className="stretched-link">{props.title}</a>
                </Link>
            </h5>
            {/* {card.author && <h6 className="card-subtitle mb-2 text-muted">{card.author}</h6>}{' '} */}
            <p>
                {props.tags &&
                    props.tags.map(tag => <span className="badge bg-light text-dark me-1 text-capitalize">{tag}</span>)}
            </p>
            {props.description && <p className="card-text">{props.description}</p>}
        </div>
    </div>
)

export default Card
