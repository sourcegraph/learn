import MarkdownFile from '@interfaces/MarkdownFile'
import listAllRecords from '@lib/listAllRecords'
import loadMarkdownFile from '@lib/loadMarkdownFile'

export default async function loadAllRecords(baseDirectory: string): Promise<MarkdownFile[]> {
    const records = await listAllRecords(baseDirectory)
    const loadingRecords = records.map(record => loadMarkdownFile(baseDirectory, record))
    const loadedRecords = await Promise.all(loadingRecords)

    return loadedRecords
}
