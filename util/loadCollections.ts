import { promises as fs } from 'fs'

import yaml from 'js-yaml'

import CollectionDefinition from './CollectionDefinition'
import loadAllRecords from './loadAllRecords'
import MarkdownFile from './MarkdownFile'
import { normalizeCollectionDefinition } from './validators'

export interface AuthorDefinition {
    id: string
    name: string
    bio: string
    socialLinks: string[]
}

export interface RecordCollection {
    title: string
    slug?: string
    type: string
    members: MarkdownFile[]
}

interface Collections {
    recordCollections: RecordCollection[]
    authors: AuthorDefinition[]
}

function findMemberRecord(records: MarkdownFile[], memberSlug: string, collectionDefinition: CollectionDefinition): MarkdownFile {
    const memberRecord = records.find(record => record.slug === memberSlug)
    if (!memberRecord) {
        throw new Error(
            `Record not found: "${memberSlug}" from collection "${collectionDefinition.title})"`
        )
    }
    return memberRecord
}

function returnAllMemberRecords(collectionDefinition: CollectionDefinition, records: MarkdownFile[]):MarkdownFile[] {
    const uniqueMemberRecords: MarkdownFile[] = []
    collectionDefinition.members.map(memberSlug => {
        const memberRecord = findMemberRecord(records, memberSlug, collectionDefinition)
        uniqueMemberRecords.push(memberRecord) 
    })

    return uniqueMemberRecords
}

function returnRecordCollections(collections: CollectionDefinition[], records: MarkdownFile[]): RecordCollection[] {
    const uniqueRecordCollections: RecordCollection[] = []
    collections.map(collectionDefinition => {
        const normalizedCollectionDefinition = normalizeCollectionDefinition(collectionDefinition)
        const memberRecords = returnAllMemberRecords(normalizedCollectionDefinition, records)
        const collection =  {
            title: normalizedCollectionDefinition.title,
            type: normalizedCollectionDefinition.type,
            members: memberRecords,
        }
        uniqueRecordCollections.push(collection)
    })
    
    return uniqueRecordCollections
}

export default async function loadCollections(recordType: string): Promise<Collections> {
    const collectionsFilePath = 'collections.yaml'
    const records = await loadAllRecords(recordType)
    const body = await fs.readFile(collectionsFilePath, 'utf-8')
    const data = yaml.load(body) as {
                                        collections: CollectionDefinition[],
                                        authors: AuthorDefinition[]
                                    }
    const recordCollections = returnRecordCollections(data.collections, records)
    const authors = data.authors
   
    return { recordCollections, authors }
}
