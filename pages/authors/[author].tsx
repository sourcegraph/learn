import { GetStaticPaths, GetStaticProps } from 'next'

import Author, { Props as AuthorProps } from '../../components/templates/Profile'
import loadAllRecords from '../../lib/loadAllRecords'
import loadAuthorCollections from '../../lib/loadAuthorCollections'
import getQueryParameter from '../../util/getQueryParameters'
import omitUndefinedFields from '../../util/omitUndefinedFields'

export const getStaticPaths: GetStaticPaths = async () => {
    const authorCollection =  await loadAuthorCollections()
    const authorSlugs = authorCollection.authors.map(author => author?.slug)
    const paths = authorSlugs.map(authorSlug => `/authors/${authorSlug}`)
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
        throw new Error(`Did not find author with id "${authorSlug}".`)
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
