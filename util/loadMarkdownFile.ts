import { promises as fs } from 'fs'
import path from 'path'

import greyMatter from 'gray-matter'

import FrontMatter from './FrontMatter'
import MarkdownFile from './MarkdownFile'
import { normalizeTags, normalizeString, isBoolean } from './validators'

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

function normalizeFrontMatter(rawFrontMatter: ReturnType<typeof greyMatter>['data']): FrontMatter {
    return {
        title: normalizeString(rawFrontMatter.title) ?? normalizeString(rawFrontMatter.alternateTitle) ?? 'Untitled Document',
        alternateTitle: rawFrontMatter.alternateTitle ? normalizeString(rawFrontMatter.alternateTitle) : '',
        tags: normalizeTags(rawFrontMatter.tags),
        published: isBoolean(rawFrontMatter.published) ? rawFrontMatter.published : true,
        unlisted: isBoolean(rawFrontMatter.unlisted) ? rawFrontMatter.unlisted : false,
        author: rawFrontMatter.author ? normalizeString(rawFrontMatter.author) : '',
        image: rawFrontMatter.image ? normalizeString(rawFrontMatter.image) : '',
        imageAlt: rawFrontMatter.imageAlt ? normalizeString(rawFrontMatter.imageAlt) : '',
        socialImage: rawFrontMatter.socialImage ? normalizeString(rawFrontMatter.socialImage) : '',
        description: rawFrontMatter.description ? normalizeString(rawFrontMatter.description) : '',
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
