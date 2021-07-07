import { GetStaticPaths, GetStaticProps } from 'next'

import Article, { Props as ArticleProps } from '../../components/Article'
import getQueryParameter from '../../util/getQueryParameters'
import loadAllPosts from '../../util/loadAllPosts'
import loadMarkdownFile from '../../util/loadMarkdownFile'
import serializeMdxSource from '../../util/serializeMdxSource'

export default Article

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

    return {
        props: {
            title: markdownFile.frontMatter.title,
            alternateTitle: markdownFile.frontMatter.alternateTitle,
            author: markdownFile.frontMatter.author ?? '',
            tags: markdownFile.frontMatter.tags,
            image: markdownFile.frontMatter.image ?? '',
            description: markdownFile.frontMatter.description ?? '',
            toc,
            mdxSource: serializeResult,
        },
    }
}
