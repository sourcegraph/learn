import { promises as fs } from 'fs'

import yaml from 'js-yaml'

import AuthorCollection from '../interfaces/AuthorCollection'

import { normalizeAuthorCollectionDefinition } from '../util/validators'

interface AuthorCollections {
    authors: AuthorCollection[]
}

function returnAuthorCollection(authors: AuthorCollection[]): AuthorCollection[] {
    return authors.map(normalizeAuthorCollectionDefinition)
}

export default async function loadAuthorCollections(): Promise<AuthorCollections> {
    const collectionsFilePath = 'data/authors.yaml'
    const body = await fs.readFile(collectionsFilePath, 'utf-8')
    const data = yaml.load(body) as { authors: AuthorCollection[] }
    const authors = returnAuthorCollection(data.authors)

    return { authors }
}
