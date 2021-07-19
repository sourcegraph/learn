import { promises as fs } from 'fs'
import path from 'path'

import greyMatter from 'gray-matter'

import FrontMatter from './FrontMatter'
import MarkdownFile from './MarkdownFile'

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

function normalizeTags(rawTags: unknown): string[] {
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

function isString(value: unknown): value is string {
    return typeof value === 'string'
}

function isStringArray(value: unknown): value is string[] {
    return Array.isArray(value) && value.every(item => isString(item))
}

function normalizeFrontMatter(rawFrontMatter: ReturnType<typeof greyMatter>['data']): FrontMatter {
    return {
        title: rawFrontMatter.title ?? rawFrontMatter.alternateTitle ?? 'Untitled Document',
        alternateTitle: rawFrontMatter.alternateTitle,
        tags: normalizeTags(rawFrontMatter.tags),
        published: rawFrontMatter.published ?? true,
        unlisted: rawFrontMatter.unlisted ?? false,
        author: rawFrontMatter.author,
        image: rawFrontMatter.image,
        socialImage: rawFrontMatter.socialImage,
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
