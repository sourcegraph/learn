import globby from 'globby'
import path from 'path'

export default async function getAllPosts() {
    const baseDirectory = path.join(process.cwd(), 'posts')
    const pattern = '**.md'
    const entries = await globby(pattern, { cwd: baseDirectory })
    return entries
}
