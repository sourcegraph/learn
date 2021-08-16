import { promises as fs } from 'fs'

export default async function listAllRecords(baseDirectory: string): Promise<string[]> {
    const fileRegex = /\.(md|markdown|mdx)$/gi
    const getFiles = await fs.readdir(baseDirectory)
    const matchedFiles = getFiles.filter(file => file.match(fileRegex))

    return matchedFiles
}
