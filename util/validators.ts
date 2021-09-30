import AuthorCollection from '@interfaces/AuthorCollection'
import FrontMatter from '@interfaces/FrontMatter'
import RecordCollectionDefinition from '@interfaces/RecordCollectionDefinition'
import greyMatter from 'gray-matter'

export function isString(value: unknown): value is string {
    return typeof value === 'string'
}

export function isStringArray(value: unknown): value is string[] {
    return Array.isArray(value) && value.every(item => isString(item))
}

export function isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean'
}

export function normalizeStringArray(rawItems: unknown): string[] {
    if (!rawItems) {
        return []
    }
    if (isString(rawItems)) {
        return [rawItems.trim().toLowerCase()]
    }
    if (isStringArray(rawItems)) {
        return rawItems.map(item => item.trim().toLowerCase())
    }
    throw new Error('Items must be an array of strings.')
}

export function normalizeString(rawString: unknown): string {
    if (isString(rawString)) {
        return rawString.trim()
    } 
    throw new Error('Front-matter: Value must be a string.')
}

export function normalizeFrontMatter(rawFrontMatter: ReturnType<typeof greyMatter>['data']): FrontMatter {
    return {
        title: normalizeString(rawFrontMatter.title) ?? normalizeString(rawFrontMatter.browserTitle) ?? 'Untitled Document',
        browserTitle: rawFrontMatter.browserTitle ? 
            normalizeString(rawFrontMatter.browserTitle) 
            : null,
        tags: normalizeStringArray(rawFrontMatter.tags),
        author: rawFrontMatter.author ?
            normalizeString(rawFrontMatter.author)
            : null,
        publicationDate: rawFrontMatter.publicationDate ? 
            normalizeString(rawFrontMatter.publicationDate) 
            : null,
        updatedDate: rawFrontMatter.updatedDate ? 
            normalizeString(rawFrontMatter.updatedDate) 
            : null,
        image: rawFrontMatter.image ? 
            normalizeString(rawFrontMatter.image) 
            : null,
        imageAlt: rawFrontMatter.imageAlt ? 
            normalizeString(rawFrontMatter.imageAlt) 
            : null,
        socialImage: rawFrontMatter.socialImage ? 
            normalizeString(rawFrontMatter.socialImage) 
            : null,
        description: rawFrontMatter.description ? 
            normalizeString(rawFrontMatter.description) 
            : null,
        type: normalizeString(rawFrontMatter.type)
    }
}

export function normalizeRecordCollectionDefinition(collection: RecordCollectionDefinition): RecordCollectionDefinition {
    return {
        title: normalizeString(collection.title),
        slug: normalizeString(collection.slug),
        type: normalizeString(collection.type),
        members: normalizeStringArray(collection.members)
    }
}

export function normalizeAuthorCollectionDefinition(author: AuthorCollection): AuthorCollection {
    return {
        slug: normalizeString(author.slug),
        name: normalizeString(author.name),
        bio: author.bio ? 
            normalizeString(author.bio) 
            : null,
        twitterLink: author.twitterLink ? 
            normalizeString(author.twitterLink)
            : null,
        linkedInLink: author.linkedInLink ? 
            normalizeString(author.linkedInLink)
            : null
    }
}
