import { promises as fs } from 'fs'

import yaml from 'js-yaml'

import AuthorCollectionDefinition from './AuthorCollectionDefinition'
import loadAllRecords from './loadAllRecords'
import MarkdownFile from './MarkdownFile'
import RecordCollectionDefinition from './RecordCollectionDefinition'
import { normalizeRecordCollectionDefinition, normalizeAuthorCollectionDefinition } from './validators'

export interface RecordCollection {
    title: string
    slug?: string
    type: string
    members: MarkdownFile[]
}

interface Collections {
    recordCollections: RecordCollection[]
    authors: AuthorCollectionDefinition[]
}

function findMemberRecord(records: MarkdownFile[], memberSlug: string, collectionDefinition: RecordCollectionDefinition): MarkdownFile {
    const memberRecord = records.find(record => record.slug === memberSlug)
    if (!memberRecord) {
        throw new Error(
            `Record not found: "${memberSlug}" from collection "${collectionDefinition.title})"`
        )
    }
    return memberRecord
}

function returnAllMemberRecords(collectionDefinition: RecordCollectionDefinition, records: MarkdownFile[]):MarkdownFile[] {
    let uniqueMemberRecords: MarkdownFile[] = []
    collectionDefinition.members.map(memberSlug => {
        const memberRecord = findMemberRecord(records, memberSlug, collectionDefinition)
        uniqueMemberRecords = [ ...uniqueMemberRecords, memberRecord ]
    })

    return uniqueMemberRecords
}

function returnRecordCollections(collections: RecordCollectionDefinition[], records: MarkdownFile[]): RecordCollection[] {
    let validatedRecordCollections: RecordCollection[] = []
    collections.map(collectionDefinition => {
        const normalizedCollectionDefinition = normalizeRecordCollectionDefinition(collectionDefinition)
        const memberRecords = returnAllMemberRecords(normalizedCollectionDefinition, records)
        const collection =  {
            title: normalizedCollectionDefinition.title,
            type: normalizedCollectionDefinition.type,
            members: memberRecords,
        }
        validatedRecordCollections = [ ...validatedRecordCollections, collection ]
    })
    
    return validatedRecordCollections
}

function returnAuthorCollection(authors: AuthorCollectionDefinition[]): AuthorCollectionDefinition[] {
    let validatedAuthorCollections: AuthorCollectionDefinition[] = []
    authors.map(authorCollectionDefinition => {
        const normalizedAuthorCollection = normalizeAuthorCollectionDefinition(authorCollectionDefinition)
        validatedAuthorCollections = [ ...validatedAuthorCollections, normalizedAuthorCollection ]
    })

    return validatedAuthorCollections
}

export default async function loadCollections(recordType: string): Promise<Collections> {
    const collectionsFilePath = 'collections.yaml'
    const records = await loadAllRecords(recordType)
    const body = await fs.readFile(collectionsFilePath, 'utf-8')
    const data = yaml.load(body) as {
                                        collections: RecordCollectionDefinition[],
                                        authors: AuthorCollectionDefinition[]
                                    }
    const recordCollections = returnRecordCollections(data.collections, records)
    const authors = returnAuthorCollection(data.authors)
   
    return { recordCollections, authors }
}
