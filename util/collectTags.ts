import MarkdownFile from '@interfaces/MarkdownFile'
import uniq from 'lodash/uniq'

export default function collectTags(markdownFiles: MarkdownFile[]): string[] {
    const tags = markdownFiles.flatMap(file => file.frontMatter.tags)
    return uniq(tags)
}
