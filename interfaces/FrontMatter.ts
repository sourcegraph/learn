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
    published: boolean
    unlisted: boolean
    author?: string | null

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
    /**
     * Flag to determine if table of contents should be shown for an article or not
     * If present and its value true, table of contents should be shown
     * If present and its value is false, TOC should not be shown
     * If absent, TOC should be shown
     * Hence by default it is visible except it is set to false
     */
    showToc?: boolean

    /** Content type */
    type: string
}
