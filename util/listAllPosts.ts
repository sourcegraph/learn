import path from 'path'

import globby from 'globby'

export default async function listAllPosts(baseDirectory: string) {
    const pattern = '**/*.{md,markdown,mdx}'
    const entries = await globby(pattern, { cwd: baseDirectory })
    return entries
}
