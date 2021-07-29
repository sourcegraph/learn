import { promises as fs } from 'fs'
import path from 'path'

import greyMatter from 'gray-matter'

import MarkdownFile from '../interfaces/MarkdownFile'

import { normalizeFrontMatter } from './validators'

function removeExtension(filename: string): string {
    const parts = filename.split('.')
    if (parts.length > 1) {
        return parts.slice(0, -1).join('.')
    }
    return filename
}

function filenameToSlug(filepath: string): string {
    const basename = path.basename(filepath)
    return removeExtension(basename)
}

export default async function loadMarkdownFile(baseDirectory: string, filename: string): Promise<MarkdownFile> {
    const filepath = path.join(baseDirectory, filename)
    const rawSource = await fs.readFile(filepath, 'utf-8')
    const { content, data } = greyMatter(rawSource)
    const frontMatter = normalizeFrontMatter(data)
    const slug = filenameToSlug(filename)
    return { slug, filename, body: content, frontMatter }
}
