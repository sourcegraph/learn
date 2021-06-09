import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import PageLayout from '../components/PageLayout'
import loadAllPosts from '../util/loadAllPosts'

interface ContentCard {
    title: string
    url: string
    tags: string[]
    author?: string
}

interface Props {
    contentCards: ContentCard[]
}

export const getStaticProps: GetStaticProps<Props> = async context => {
    const posts = await loadAllPosts()
    const contentCards = posts.map(post => ({
        title: post.frontMatter.title,
        url: `/posts/${post.slug}`,
        tags: post.frontMatter.tags,
        author: post.frontMatter.author,
    }))

    return {
        props: {
            contentCards,
        },
    }
}

export default function Home(props: Props) {
    return (
        <PageLayout>
            <p>
                You've found <strong>Sourcegraph Learn</strong>, our new developer education hub.
            </p>
            <p>We haven't launched yet! Come back soon.</p>

            <div className="row row-cols-2">
                {props.contentCards.map(card => (
                    <div className="col">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                {/* {card.author && <h6 className="card-subtitle mb-2 text-muted">{card.author}</h6>}{' '} */}
                                <p>
                                    {card.tags.map(tag => (
                                        <span className="badge bg-light text-dark me-1 text-capitalize">{tag}</span>
                                    ))}
                                </p>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </PageLayout>
    )
}
