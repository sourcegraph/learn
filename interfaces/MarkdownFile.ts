import FrontMatter from '@interfaces/FrontMatter'

export default interface MarkdownFile {
    slug: string
    filename: string
    frontMatter: FrontMatter
    body: string
}
