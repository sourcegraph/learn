import { GetStaticPaths, GetStaticProps } from 'next'
import serializeMdxSource from '../../util/serializeMdxSource'
import loadMarkdownFile from '../../util/loadMarkdownFile'
import getQueryParam from '../../util/getQueryParam'
import loadAllPosts from '../../util/loadAllPosts'
import Article, { Props as ArticleProps } from '../../components/Article'

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
    const slug = getQueryParam(context.params, 'slug')
    const baseDirectory = 'posts'
    const markdownFile = await loadMarkdownFile(baseDirectory, slug + '.md')
    const mdxSource = await serializeMdxSource(markdownFile)

    return {
        props: {
            title: markdownFile.frontMatter.title,
            author: markdownFile.frontMatter.author ?? '',
            tags: markdownFile.frontMatter.tags,
            image: markdownFile.frontMatter.image ?? '',
            description: markdownFile.frontMatter.description ?? '',
            mdxSource,
        },
    }
}
