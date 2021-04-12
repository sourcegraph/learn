import globby from 'globby'
import path from 'path'

export default async function listAllPosts(baseDirectory: string) {
    const pattern = '**/*.{md,markdown,mdx}'
    const entries = await globby(pattern, { cwd: baseDirectory })
    return entries
}
