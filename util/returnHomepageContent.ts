import MarkdownFile from '@interfaces/MarkdownFile'
import regexTestString from '@util/regexTestString'

const returnHomepageContent = (records: MarkdownFile[], term: string): MarkdownFile[] => records
    .filter(record => regexTestString(record.frontMatter.tags.join(' '), term))
    .slice(0,3)

export default returnHomepageContent
