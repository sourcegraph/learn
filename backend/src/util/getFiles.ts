import { promises as fs } from 'fs'
import * as path from 'path'

export default async function getFiles(directory: string): Promise<string[]> {
    const getFiles = await fs.readdir(directory)
    const files = getFiles.map(file => path.join(directory, file))

    return files
}
