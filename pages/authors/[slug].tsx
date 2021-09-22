import Author, { Props as AuthorProps } from '@components/templates/AuthorTemplate'
import loadAllRecords from '@lib/loadAllRecords'
import loadAuthorCollections from '@lib/loadAuthorCollections'
import getQueryParameter from '@util/getQueryParameters'
import omitUndefinedFields from '@util/omitUndefinedFields'
import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
    const authorCollection =  await loadAuthorCollections()
    const authorSlugs = authorCollection.authors.map(author => author?.slug)
    const paths = authorSlugs.map(authorSlug => ({ params: { author: authorSlug } }))
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<AuthorProps> = async context => {
    const authorSlug = getQueryParameter(context.params, 'author')
    const authorCollection =  await loadAuthorCollections()
    const author = authorCollection.authors.find(author => author.slug === authorSlug)

    if (!author) {
        throw new Error(`Did not find author "${authorSlug}".`)
    }

    const posts = await loadAllRecords('posts')
    const filteredRecords = posts.filter(record => record.frontMatter.author === authorSlug)
    const records = filteredRecords.map(post => omitUndefinedFields({ ...post, url: `/${post.slug}` }))

    return {
        props: omitUndefinedFields({
          author,
          records,
        }),
    }
}

export default Author
