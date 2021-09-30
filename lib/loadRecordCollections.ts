import { promises as fs } from 'fs'

import MarkdownFile from '@interfaces/MarkdownFile'
import RecordCollection from '@interfaces/RecordCollection'
import RecordCollectionDefinition from '@interfaces/RecordCollectionDefinition'
import loadAllRecords from '@lib/loadAllRecords'
import { normalizeRecordCollectionDefinition } from '@util/validators'
import yaml from 'js-yaml'

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
    return collectionDefinition.members.map(memberSlug => findMemberRecord(records, memberSlug, collectionDefinition))
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
    const recordTypeCollections = data.collections.filter(collection => collection.type === recordType)
    const recordCollections = returnRecordCollections(recordTypeCollections, records)
   
    return { recordCollections }
}
