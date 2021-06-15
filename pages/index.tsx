import { GetStaticProps } from 'next'
import React from 'react'
import PageLayout from '../components/PageLayout'
import loadAllPosts from '../util/loadAllPosts'
import ContentCard from '../components/ContentCard'
import { MarkdownFile } from '../util/loadMarkdownFile'
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
            <div className="row row-cols-2">
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
