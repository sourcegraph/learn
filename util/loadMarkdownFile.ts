import { promises as fs } from 'fs'
import greyMatter from 'gray-matter'
import path from 'path'

export interface FrontMatter {
    title: string
    tags: string[]
}

export interface MarkdownFile {
    slug: string
    filename: string
    frontMatter: FrontMatter
    body: string
}

function removeExtension(filename: string) {
    const parts = filename.split('.')
    if (parts.length > 1) {
        return parts.slice(0, -1).join('.')
    }
    return filename
}

function filenameToSlug(filepath: string) {
    const basename = path.basename(filepath)
    return removeExtension(basename)
}

function normalizeTags(rawTags: any): string[] {
    if (!rawTags) {
        return []
    }
    if (isString(rawTags)) {
        return [rawTags.trim().toLowerCase()]
    }
    if (isStringArray(rawTags)) {
        return rawTags.map(tag => tag.trim().toLowerCase())
    }
    throw new Error('Front-matter: Tags must be an array of strings.')
}

function isString(s: string): s is string {
    return typeof s === 'string'
}

function isStringArray(a: any[]): a is string[] {
    return a.every(item => isString(item))
}

function normalizeFrontMatter(rawFrontMatter: ReturnType<typeof greyMatter>['data']): FrontMatter {
    return {
        title: rawFrontMatter.title ?? 'Untitled',
        tags: normalizeTags(rawFrontMatter.tags).map(tag => tag.toLocaleLowerCase()),
    }
}

export default async function loadMarkdownFile(baseDirectory: string, filename: string): Promise<MarkdownFile> {
    const filepath = path.join(baseDirectory, filename)
    const rawSource = await fs.readFile(filepath, 'utf-8')
    const { content, data } = greyMatter(rawSource)
    const frontMatter = normalizeFrontMatter(data)
    const slug = filenameToSlug(filename)
    return { slug, filename, body: content, frontMatter }
}
