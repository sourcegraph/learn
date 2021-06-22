import { GetStaticProps } from 'next'
import React from 'react'
import PageLayout from '../components/PageLayout'
import loadAllPosts from '../util/loadAllPosts'
import ContentCard from '../components/ContentCard'
import MarkdownFile from '../util/MarkdownFile'
import omitUndefinedFields from '../util/omitUndefinedFields'

interface Props {
    posts: (MarkdownFile & { url: string })[]
}

export const getStaticProps: GetStaticProps<Props> = async context => {
    const posts = await loadAllPosts()

    return {
        props: {
            posts: posts.map(post => omitUndefinedFields({ ...post, url: `/posts/${post.slug}` })),
        },
    }
}

export default function Home(props: Props) {
    return (
        <PageLayout>
            <div className="row">
                <img src="/headers/sourcegraph-learn-header.svg" className="w-100 mb-5" />
            </div>
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
        </PageLayout>
    )
}
