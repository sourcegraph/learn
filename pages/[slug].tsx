import { GetStaticPaths, GetStaticProps } from 'next'

import Article, { Props as ArticleProps } from '../components/Article'
import getQueryParameter from '../util/getQueryParameters'
import loadAllPosts from '../util/loadAllPosts'
import loadCollections from '../util/loadCollections'
import loadMarkdownFile from '../util/loadMarkdownFile'
import omitUndefinedFields from '../util/omitUndefinedFields'
import serializeMdxSource from '../util/serializeMdxSource'

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await loadAllPosts(true)
    const paths = posts.map(post => ({ params: { slug: post.slug } }))
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<ArticleProps> = async context => {
    const slug = getQueryParameter(context.params, 'slug')
    const baseDirectory = 'posts'
    const markdownFile = await loadMarkdownFile(baseDirectory, `${slug}.md`)
    const { serializeResult, toc } = await serializeMdxSource(markdownFile)
    const collections = await loadCollections()
    const {postCollections, authors} = collections
    const parentCollection = postCollections.find(collection => !!collection.members.find(member => member.slug === slug))
    const uniqueAuthor = authors.find(author => author.id === markdownFile.frontMatter.author)
    return {
        props: omitUndefinedFields({
            title: markdownFile.frontMatter.title,
            alternateTitle: markdownFile.frontMatter.alternateTitle,
            author: uniqueAuthor?.name ?? '',
            tags: markdownFile.frontMatter.tags,
            image: markdownFile.frontMatter.image,
            socialImage: markdownFile.frontMatter.socialImage,
            description: markdownFile.frontMatter.description,
            toc,
            mdxSource: serializeResult,
            collection: parentCollection,
            slug,
        }),
    }
}

export default Article
