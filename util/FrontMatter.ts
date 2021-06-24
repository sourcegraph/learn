/**
 * Description of the fields that are supported in the front-matter of markdown
 * files.
 *
 * The front-matter is the block of data in YAML format, delimited by `---`
 * markers, at the top of each markdown file.
 *
 */
export default interface FrontMatter {
    title: string
    alternateTitle: string
    tags: string[]
    published: boolean
    unlisted: boolean
    author?: string

    /** Short description used for the post's card and social description meta tag..*/
    description?: string

    /** Image URL used for the posts's card, header, and social image meta tag. */
    image?: string
}
