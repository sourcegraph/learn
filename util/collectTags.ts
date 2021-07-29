import uniq from 'lodash/uniq'

import MarkdownFile from '../interfaces/MarkdownFile'

export default function collectTags(markdownFiles: MarkdownFile[]): string[] {
    const tags = markdownFiles.flatMap(file => file.frontMatter.tags)
    return uniq(tags)
}
