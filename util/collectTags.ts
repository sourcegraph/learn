import uniq from 'lodash/uniq'

import MarkdownFile from './MarkdownFile'

export default function collectTags(markdownFiles: MarkdownFile[]): string[] {
    const tags = markdownFiles.flatMap(f => f.frontMatter.tags)
    return uniq(tags)
}
