import listAllPosts from './listAllPosts'
import loadMarkdownFile from './loadMarkdownFile'
import MarkdownFile from './MarkdownFile'

export default async function loadAllPosts(includeUnlisted: boolean = false): Promise<MarkdownFile[]> {
    const baseDirectory = 'posts'
    const posts = await listAllPosts(baseDirectory)
    const loadingPosts = posts.map(post => {
        return loadMarkdownFile(baseDirectory, post)
    })
    let loadedPosts = await Promise.all(loadingPosts)

    // Exclude posts that are unlisted, unless includeUnlisted option is used.
    if (!includeUnlisted) {
        loadedPosts = loadedPosts.filter(post => !post.frontMatter.unlisted)
    }

    // Exclude posts that are not published.
    loadedPosts = loadedPosts.filter(post => post.frontMatter.published)

    return loadedPosts
}
