/**
 * Description of the fields that are supported in record collections
 * in the `collections.yaml` file
 */
export default interface RecordCollectionDefinition {
    title: string
    slug?: string
    type: string
    members: string[]
}
