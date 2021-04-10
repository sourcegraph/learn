import renderToString from 'next-mdx-remote/render-to-string'
import { MdxRemote } from 'next-mdx-remote/types'
import { MarkdownFile } from './loadMarkdownFile'

export default function renderMdxSource(markdownFile: MarkdownFile, components: MdxRemote.Components) {
    return renderToString(markdownFile.body, { components })
}
