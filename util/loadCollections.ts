import { promises as fs } from 'fs'

import yaml from 'js-yaml'

import loadAllPosts from './loadAllPosts'
import MarkdownFile from './MarkdownFile'

interface CollectionDefinition {
    title: string
    slug: string
    members: string[]
}

export interface AuthorDefinition {
    id: string
    name: string
    bio: string
    socialLinks: string[]
}

export interface PostCollection {
    title: string
    slug: string
    members: MarkdownFile[]
}

interface Collections {
    postCollections: PostCollection[]
    authors: AuthorDefinition[]
}

export default async function loadCollections(): Promise<Collections> {
    const collectionsFilePath = 'collections.yaml'
    const posts = await loadAllPosts()
    const body = await fs.readFile(collectionsFilePath, 'utf-8')
    const data = yaml.load(body) as {
                                        collections: CollectionDefinition[],
                                        authors: AuthorDefinition[]
                                    }

    const postCollections = data.collections.map(collectionDefinition => {
        const memberPosts = collectionDefinition.members.map(memberSlug => {
            const memberPost = posts.find(post => post.slug === memberSlug)
            if (!memberPost) {
                throw new Error(
                    `Post not found: "${memberSlug}" from collection "${collectionDefinition.slug}" (${collectionDefinition.title})`
                )
            }
            return memberPost
        })
        return {
            ...collectionDefinition,
            members: memberPosts,
        }
    })

    const authors = data.authors

    return {postCollections, authors}
}
