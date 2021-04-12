import path from 'path'
import listAllPosts from './listAllPosts'
import loadMarkdownFile, { MarkdownFile } from './loadMarkdownFile'

export default async function loadAllPosts(): Promise<MarkdownFile[]> {
    const baseDirectory = 'posts'
    const posts = await listAllPosts(baseDirectory)
    const loadingPosts = posts.map(post => {
        return loadMarkdownFile(baseDirectory, post)
    })
    return Promise.all(loadingPosts)
}
