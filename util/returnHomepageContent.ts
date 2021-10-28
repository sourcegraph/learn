import MarkdownFile from '@interfaces/MarkdownFile'

const returnHomepageContent = (records: MarkdownFile[], term: string): MarkdownFile[] => {
    const termRegex = new RegExp(`${term}`, 'i')
    const testTags = (tagString: string): boolean => termRegex.test(tagString)

    return records.filter(record => testTags(record.frontMatter.tags.join(' '))).slice(0,3)
}

export default returnHomepageContent
