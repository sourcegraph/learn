import { promises as fs } from 'fs'
import greyMatter from 'gray-matter'
import path from 'path'

export interface FrontMatter {
    title: string
    alternateTitle: string
    tags: string[]
    published: boolean
    unlisted: boolean
    author?: string

    /** Short description used for the post's card and social description meta tag..*/
    description?: string

    /** Image URL used for the posts's card, header, and social image meta tag. */
    image?: string
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
        title: rawFrontMatter.title ?? rawFrontMatter.alternateTitle ?? 'No title',
        alternateTitle: rawFrontMatter.alternateTitle ?? 'No alternate title',
        tags: normalizeTags(rawFrontMatter.tags),
        published: rawFrontMatter.published ?? true,
        unlisted: rawFrontMatter.unlisted ?? false,
        author: rawFrontMatter.author,
        image: rawFrontMatter.image,
        description: rawFrontMatter.description,
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
