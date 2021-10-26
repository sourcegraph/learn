import MarkdownFile from '@interfaces/MarkdownFile'
import capitalize from '@util/capitalize'
import collectTags from '@util/collectTags'
import transformTag from '@util/transformTag'

interface FilteredRecords {
    records: MarkdownFile[]
    title: string
}

const filterRecordsWithTag = (records: MarkdownFile[], tag: string): FilteredRecords => {
    const transformedTag = transformTag(tag)
    let titleTag: string = capitalize(transformedTag)
    const checkRecordSet = (record: MarkdownFile, tag: string): boolean => {
        const recordSet = collectTags([record])
        if (recordSet.has(tag.toUpperCase())) {
            titleTag = tag.toUpperCase()
        }

        return recordSet.has(tag) || recordSet.has(tag.toUpperCase()) || recordSet.has(titleTag)
    }
    const filteredRecords = records.filter(record => checkRecordSet(record, transformedTag))

    return {
        records: filteredRecords, 
        title: titleTag,
    }
}

export default filterRecordsWithTag
