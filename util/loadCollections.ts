import { promises as fs } from 'fs'

import yaml from 'js-yaml'

import loadAllPosts from './loadAllPosts'
import MarkdownFile from './MarkdownFile'

interface CollectionDefinition {
    title: string
    slug: string
    members: string[]
}

export interface Collection {
    title: string
    slug: string
    members: MarkdownFile[]
}

export default async function loadCollections(): Promise<Collection[]> {
    const collectionsFilePath = 'collections.yaml'
    const posts = await loadAllPosts()
    const body = await fs.readFile(collectionsFilePath, 'utf-8')
    const data = yaml.load(body) as { collections: CollectionDefinition[] }
    console.log(JSON.stringify(data, null, 2))
    const collections = data.collections.map(collectionDefinition => {
        const memberPosts = collectionDefinition.members.map(memberSlug => {
            const memberPost = posts.find(post => post.slug === memberSlug)
            if (!memberPost) {
                throw new Error(
                    `Post not found: "" from collection "${collectionDefinition.slug}" (${collectionDefinition.title})`
                )
            }
            return memberPost
        })
        return {
            ...collectionDefinition,
            members: memberPosts,
        }
    })
    return collections
}
