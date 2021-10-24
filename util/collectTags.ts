import MarkdownFile from '@interfaces/MarkdownFile'
import sluggify from '@util/sluggify'

export default function collectTags(markdownFiles: MarkdownFile[], slug?: boolean): Set<string> {
    if (slug) {
        return new Set(markdownFiles.flatMap(file => file.frontMatter.tags.map(tag => sluggify(tag))))
    }
    return new Set(markdownFiles.flatMap(file => file.frontMatter.tags.map(tag => tag)))
}
