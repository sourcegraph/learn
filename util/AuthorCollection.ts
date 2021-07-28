/**
 * Description of the fields that are supported in author collections
 * in the `collections.yaml` file
 */
 export default interface AuthorCollection {
    id: string
    name: string
    bio?: string | null
    socialLinks?: string[] | null
}
