import MarkdownFileWithUrl from '@interfaces/MarkdownFileWithUrl'
import sluggify from '@util/sluggify'

export default function collectTags(markdownFiles: MarkdownFileWithUrl[] | undefined, slug?: boolean): Set<string> | string[] {
    if (markdownFiles) {
        if (slug) {
            return new Set(markdownFiles.flatMap(file => file.frontMatter.tags.map(tag => sluggify(tag))))
        }
        return new Set(markdownFiles.flatMap(file => file.frontMatter.tags.map(tag => tag)))
    }

    return ['']
}
