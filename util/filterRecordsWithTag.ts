import MarkdownFile from '@interfaces/MarkdownFile'
import capitalize from '@util/capitalize'
import collectTags from '@util/collectTags'
import regexTestString from '@util/regexTestString'
import transformTag from '@util/transformTag'

interface FilteredRecords {
    records: MarkdownFile[]
    title: string
}

const checkMatch = (string: string, tag: string): boolean | null => {
    const regex = /[A-Z]/g
    const matched = string.match(regex)

    return matched && matched.length > 1 && regexTestString(string, tag)
}

const filterRecordsWithTag = (records: MarkdownFile[], tag: string): FilteredRecords => {
    const transformedTag = transformTag(tag)
    let titleTag: string = capitalize(transformedTag)
    const checkRecordSet = (record: MarkdownFile, tag: string): boolean => {
        const recordTagSet = collectTags([record])
        const recordTagArray = Array.from(recordTagSet)
        
        return recordTagArray.some(item => {
            if (checkMatch(item, tag)) {
                titleTag = item
            }

            return regexTestString(item, tag) && item.length === tag.length
        })
    }
    const filteredRecords = records.filter(record => checkRecordSet(record, transformedTag))

    return {
        records: filteredRecords, 
        title: titleTag,
    }
}

export default filterRecordsWithTag
