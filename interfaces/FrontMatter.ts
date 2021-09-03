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
    alternateTitle?: string | null
    tags: string[]
    author?: string | null

    /** First publication date and updated publication date */
    publicationDate: string | null
    updatedDate?: string | null

    /** Short description used for the post's card and social description meta
     * tag.*/
    description?: string | null

    /** Image URL used for the post's card, header, and social image unless
     * overridden by `socialImage` */
    image?: string | null
    imageAlt?: string | null

    /** Image URL used for social image tag (og:image). If not present, the
     * social image defaults to the `image` field. */
    socialImage?: string | null

    /** Content type */
    type: string
}
