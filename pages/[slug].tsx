import ArticleTemplate, { Props as ArticleTemplateProps } from '@components/templates/ArticleTemplate'
import getBaseDirectory from '@lib/getBaseDirectory'
import listAllRecords from '@lib/listAllRecords'
import loadMarkdownFile, { filenameToSlug } from '@lib/loadMarkdownFile'
import loadRecordCollections from '@lib/loadRecordCollections'
import serializeMdxSource from '@lib/serializeMdxSource'
import getQueryParameter from '@util/getQueryParameters'
import omitUndefinedFields from '@util/omitUndefinedFields'
import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await listAllRecords('posts')
    const videos = await listAllRecords('videos')
    const allRecordSlugs = posts.concat(videos).map(file => filenameToSlug(file))
    const paths = allRecordSlugs.map(slug => ({ params: { slug } }))
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<ArticleTemplateProps> = async context => {
    const slug = getQueryParameter(context.params, 'slug')
    const baseDirectory = await getBaseDirectory(['posts', 'videos'], `${slug}.md`) ?? 'posts'
    const markdownFile = await loadMarkdownFile(baseDirectory, `${slug}.md`)
    const { serializeResult, toc } = await serializeMdxSource(markdownFile)
    const collections = await loadRecordCollections(baseDirectory)
    const { recordCollections } = collections
    const parentCollection = recordCollections.find(collection => !!collection.members.find(member => member.slug === slug))
    return {
        props: omitUndefinedFields({
            title: markdownFile.frontMatter.title,
            browserTitle: markdownFile.frontMatter.browserTitle,
            authorSlug: markdownFile.frontMatter.authorSlug ?? null,
            authorDisplayName: markdownFile.frontMatter.authorDisplayName ?? null,
            tags: markdownFile.frontMatter.tags,
            publicationDate: markdownFile.frontMatter.publicationDate,
            updatedDate: markdownFile.frontMatter.updatedDate, 
            image: markdownFile.frontMatter.image,
            imageAlt: markdownFile.frontMatter.imageAlt,
            socialImage: markdownFile.frontMatter.socialImage,
            description: markdownFile.frontMatter.description,
            toc: toc ?? null,
            mdxSource: serializeResult,
            collection: parentCollection ?? null,
            slug,
        }),
    }
}

export default ArticleTemplate
