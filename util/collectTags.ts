import MarkdownFile from '@interfaces/MarkdownFile'
import sluggify from '@util/sluggify'
import uniq from 'lodash/uniq'

export default function collectTags(markdownFiles: MarkdownFile[]): string[] {
    const tags = markdownFiles.flatMap(file => file.frontMatter.tags.map(tag => sluggify(tag)))
    return uniq(tags)
}
