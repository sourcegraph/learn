/**
 * Description of the fields that are supported in individual record collections
 */
 import MarkdownFile from './MarkdownFile'
 
 export default interface RecordCollection {
    title: string
    slug?: string
    type: string
    members: MarkdownFile[]
}
