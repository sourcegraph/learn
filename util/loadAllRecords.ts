import listAllRecords from './listAllRecords'
import loadMarkdownFile from './loadMarkdownFile'
import MarkdownFile from './MarkdownFile'

export default async function loadAllRecords(baseDirectory: string, includeUnlisted: boolean = false): Promise<MarkdownFile[]> {
    const records = await listAllRecords(baseDirectory)
    const loadingRecords = records.map(record => loadMarkdownFile(baseDirectory, record))
    let loadedRecords = await Promise.all(loadingRecords)

    // Exclude records that are unlisted, unless includeUnlisted option is used.
    if (!includeUnlisted) {
        loadedRecords = loadedRecords.filter(record => !record.frontMatter.unlisted)
    }

    // Exclude records that are not published.
    loadedRecords = loadedRecords.filter(record => record.frontMatter.published)

    return loadedRecords
}
