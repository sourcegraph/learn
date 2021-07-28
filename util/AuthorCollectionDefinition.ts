/**
 * Description of the fields that are supported in author collections
 * in the `collections.yaml` file
 */
 export default interface AuthorCollectionDefinition {
    id: string
    name: string
    bio?: string
    socialLinks?: string[]
}
