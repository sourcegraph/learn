import { promises as fs } from 'fs'

import yaml from 'js-yaml'

import loadAllRecords from './loadAllRecords'
import MarkdownFile from './MarkdownFile'

interface CollectionDefinition {
    title: string
    slug: string
    type: string
    members: string[]
}

export interface AuthorDefinition {
    id: string
    name: string
    bio: string
    socialLinks: string[]
}

export interface RecordCollection {
    title: string
    slug: string
    members: MarkdownFile[]
}

interface Collections {
    recordCollections: RecordCollection[]
    authors: AuthorDefinition[]
}

export default async function loadCollections(recordType: string): Promise<Collections> {
    const collectionsFilePath = 'collections.yaml'
    const records = await loadAllRecords(recordType)
    const body = await fs.readFile(collectionsFilePath, 'utf-8')
    const data = yaml.load(body) as {
                                        collections: CollectionDefinition[],
                                        authors: AuthorDefinition[]
                                    }
    const recordCollections = data.collections.map(collectionDefinition => {
        const memberRecords = collectionDefinition.members.map(memberSlug => {
            const memberRecord = records.find(record => record.slug === memberSlug)
            if (!memberRecord) {
                throw new Error(
                    `Record not found: "${memberSlug}" from collection "${collectionDefinition.slug}" (${collectionDefinition.title})`
                )
            }
            return memberRecord
        })
        return {
            ...collectionDefinition,
            members: memberRecords,
        }
    })

    const authors = data.authors

    return { recordCollections, authors }
}
