import { serialize } from 'next-mdx-remote/serialize'
import { MarkdownFile } from './loadMarkdownFile'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

export default function serializeMdxSource(markdownFile: MarkdownFile) {
    return serialize(markdownFile.body, {
        mdxOptions: {
            remarkPlugins: [remarkToc],
            rehypePlugins: [rehypeSlug],
        },
    })
}
