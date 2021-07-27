/**
 * Description of the fields that are supported in the record collections
 * in the `collections.yaml` file
 */
export default interface CollectionDefinition {
    title: string
    slug?: string
    type: string
    members: string[]
}
