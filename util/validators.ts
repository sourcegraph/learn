import greyMatter from 'gray-matter'

import FrontMatter from './FrontMatter'

export function isString(value: unknown): value is string {
    return typeof value === 'string'
}

export function isStringArray(value: unknown): value is string[] {
    return Array.isArray(value) && value.every(item => isString(item))
}

export function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean'
}

export function normalizeTags(rawTags: unknown): string[] {
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

export function normalizeString(rawString: unknown): string {
    if (isString(rawString)) {
        return rawString.trim()
    } 
    throw new Error('Front-matter: Value must be a string.')
}

export async function normalizeFrontMatter(rawFrontMatter: ReturnType<typeof greyMatter>['data']): Promise<FrontMatter> {
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
        type: normalizeString(rawFrontMatter.type)
    }
}
