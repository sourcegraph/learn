import { promises as fs } from 'fs'

import RecordCollection from '@interfaces/RecordCollection'
import RecordCollectionDefinition from '@interfaces/RecordCollectionDefinition'
import loadMarkdownFile from '@lib/loadMarkdownFile'
import { normalizeRecordCollectionDefinition } from '@util/validators'
import yaml from 'js-yaml'

async function returnRecordCollections(collection: RecordCollectionDefinition): Promise<RecordCollection> {
    const normalizedCollectionDefinition = normalizeRecordCollectionDefinition(collection)
    const memberRecords = Promise.all(collection.members.map(async member => loadMarkdownFile(normalizedCollectionDefinition.type, `${member}.md`)))
        .then(response => response)
        .catch(error => {
            throw new Error(`error: ${String(error)}`)
        })
    const collectionWithRecords = {
        title: normalizedCollectionDefinition.title,
        type: normalizedCollectionDefinition.type,
        members: await memberRecords,
    }

    return collectionWithRecords
}

export default async function loadRecordCollections(slug: string): Promise<(RecordCollection | null)[]> {
    const collectionsFilePath = 'data/collections.yaml'
    const collectionData = await fs.readFile(collectionsFilePath, 'utf-8')
    const collectionFileData = yaml.load(collectionData) as { collections: RecordCollectionDefinition[] }
    const collection = await Promise.all(collectionFileData.collections.map(async collection => {
        if (collection.members.includes(slug)) {
            return returnRecordCollections(collection)
        }

        return null
    }))

    return collection.filter(item => item)
}
