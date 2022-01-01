/**
 * Description of the fields that are supported in author collections
 * in the `collections.yaml` file
 */
 export default interface AuthorCollection {
    slug: string
    name: string
    bio?: string | null
    twitterLink?: string | null
    gitHubLink?: string | null
    linkedInLink?: string | null
    twitchLink?: string | null
}
