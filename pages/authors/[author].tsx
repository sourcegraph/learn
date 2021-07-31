import { GetStaticPaths, GetStaticProps } from 'next'

import Author, { Props as AuthorProps } from '../../components/Author'
import loadAllRecords from '../../lib/loadAllRecords'
import loadAuthorCollections from '../../lib/loadAuthorCollections'
import getQueryParameter from '../../util/getQueryParameters'
import omitUndefinedFields from '../../util/omitUndefinedFields'

export const getStaticPaths: GetStaticPaths = async () => {
    const authorCollection =  await loadAuthorCollections()
    const authorIds = authorCollection.authors.map(author => author.id)
    const paths = authorIds.map(authorId => `/authors/${authorId}`)
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<AuthorProps> = async context => {
    const authorId = getQueryParameter(context.params, 'author')
    const authorCollection =  await loadAuthorCollections()
    const author = authorCollection.authors.find(author => author.id === authorId)

    const posts = await loadAllRecords('posts')
    const filteredRecords = posts.filter(record => record.frontMatter.author === authorId)
    const records = filteredRecords.map(post => omitUndefinedFields({ ...post, url: `/${post.slug}` }))

    return {
        props: omitUndefinedFields({
          author,
          records,
        }),
    }
}

export default Author
