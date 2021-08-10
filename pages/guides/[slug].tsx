import loadAllRecords from '@lib/loadAllRecords'
import loadMarkdownFile from '@lib/loadMarkdownFile'
import serializeMdxSource from '@lib/serializeMdxSource'
import getQueryParameter from '@util/getQueryParameters'
import omitUndefinedFields from '@util/omitUndefinedFields'
import slugToTitleCase from '@util/slugToTitleCase'
import { GetStaticPaths, GetStaticProps } from 'next'

import ArticleTemplate, { Props as ArticleTemplateProps } from '../../components/templates/ArticleTemplate'

export const getStaticPaths: GetStaticPaths = async () => {
    const guides = await loadAllRecords('guides', true)
    const paths = guides.map(guide => ({ params: { slug: guide.slug } }))
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<ArticleTemplateProps> = async context => {
    const slug = getQueryParameter(context.params, 'slug')
    const baseDirectory = 'guides'
    const markdownFile = await loadMarkdownFile(baseDirectory, `${slug}.md`)
    const { serializeResult, toc } = await serializeMdxSource(markdownFile)
    const recordAuthor = markdownFile.frontMatter.author ? slugToTitleCase(markdownFile.frontMatter.author) : ''
    return {
        props: omitUndefinedFields({
            title: markdownFile.frontMatter.title,
            alternateTitle: markdownFile.frontMatter.alternateTitle,
            author: recordAuthor,
            tags: markdownFile.frontMatter.tags,
            image: markdownFile.frontMatter.image,
            socialImage: markdownFile.frontMatter.socialImage,
            description: markdownFile.frontMatter.description,
            toc,
            mdxSource: serializeResult,
            slug,
        }),
    }
}

export default ArticleTemplate
