import { GetStaticPaths, GetStaticProps } from 'next'

import Author, { Props as AuthorProps } from '../../components/Author'
import getQueryParameter from '../../util/getQueryParameters'
import loadAllRecords from '../../util/loadAllRecords'
import loadAuthorCollections from '../../util/loadAuthorCollections'
import omitUndefinedFields from '../../util/omitUndefinedFields'

export const getStaticPaths: GetStaticPaths = async () => {
    const authorCollection =  await loadAuthorCollections()
    const authors = authorCollection.authors.map(author => author.id)
    const paths = authors.map(author => `/authors/${author}`)
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<AuthorProps> = async context => {
    const authorId = getQueryParameter(context.params, 'author')
    const authorCollection =  await loadAuthorCollections()
    const validAuthor = authorCollection.authors?.find(author => author.id === authorId)

    // If the author is not valid throw an error something to think about

    const posts = await loadAllRecords('posts')
    const filteredRecords = posts.filter(record => record.frontMatter.author === authorId)
    const filteredRecordsWithUrl = filteredRecords.map(post => omitUndefinedFields({ ...post, url: `/${post.slug}` }))

    return {
        props: omitUndefinedFields({
          validAuthor,
          filteredRecordsWithUrl,
        }),
    }
}

export default Author
