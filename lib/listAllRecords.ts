import { promises as fs } from 'fs'

export default async function listAllRecords(baseDirectory: string): Promise<string[]> {
    const fileRegex = /\.(md|markdown|mdx)$/gi
    const getFiles = await fs.readdir(baseDirectory)
    if (getFiles.length >=1) {
        const matchedFiles = getFiles.filter(file => file.match(fileRegex))

        return matchedFiles
    }

    return []
}
