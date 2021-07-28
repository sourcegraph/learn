import { promises as fs } from 'fs'

import yaml from 'js-yaml'

import loadAllRecords from './loadAllRecords'
import MarkdownFile from './MarkdownFile'
import RecordCollection from './RecordCollection'
import RecordCollectionDefinition from './RecordCollectionDefinition'
import { normalizeRecordCollectionDefinition } from './validators'

interface RecordCollections {
    recordCollections: RecordCollection[]
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

export default async function loadRecordCollections(recordType: string): Promise<RecordCollections> {
    const collectionsFilePath = 'data/collections.yaml'
    const records = await loadAllRecords(recordType)
    const body = await fs.readFile(collectionsFilePath, 'utf-8')
    const data = yaml.load(body) as { collections: RecordCollectionDefinition[] }
    const recordCollections = returnRecordCollections(data.collections, records)
   
    return { recordCollections }
}
