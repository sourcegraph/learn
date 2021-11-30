import MarkdownFile from '@interfaces/MarkdownFile'
import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import omitUndefinedFields from '@util/omitUndefinedFields'

const markdownWithUrls = (records: MarkdownFile[]): MarkdownFileWithUrl[] => records
    .map((record: MarkdownFile) => omitUndefinedFields(
    { ...record, url: `/${record.slug}` }
))

export default markdownWithUrls
