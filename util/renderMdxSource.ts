import renderToString from 'next-mdx-remote/render-to-string'
import { MdxRemote } from 'next-mdx-remote/types'
import { MarkdownFile } from './loadMarkdownFile'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

export default function renderMdxSource(markdownFile: MarkdownFile, components: MdxRemote.Components) {
    return renderToString(markdownFile.body, {
        components,
        mdxOptions: {
            remarkPlugins: [remarkToc],
            rehypePlugins: [rehypeSlug],
        },
    })
}
