import { MarkdownFile } from './loadMarkdownFile'
import uniq from 'lodash/uniq'

export default function collectTags(markdownFiles: MarkdownFile[]): string[] {
    const tags = markdownFiles.flatMap(f => f.frontMatter.tags)
    return uniq(tags)
}
