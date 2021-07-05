import { serialize } from 'next-mdx-remote/serialize'
import MarkdownFile from './MarkdownFile'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypePrism from '@mapbox/rehype-prism'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeAddClasses from 'rehype-add-classes'
import mdastUtilToc from 'mdast-util-toc'
import { Node } from 'unist'
import mdastUtilToHast from 'mdast-util-to-hast'

/**
 * Classes to add to elements in the rendered markdown (after the HTML is
 * generated). This is used to add utility styles to elements in markdown
 * content. The `rehype-add-classes` plugin performs this task.
 */
const classesToAddToElements = {
    'h1,h2,h3,h4,h5,h6': 'mt-5 mb-4 reveal-on-hover-parent',
    img: 'w-100 mt-5',
}

/**
 * Extract the table of contents (from heading nodes) from a markdown tree
 * (mdast) and return an html tree (hast).
 */
function extractTableOfContents(tree: Node): Node {
    const tocMdastResult = mdastUtilToc(tree)
    const tocMdastTree = tocMdastResult.map as Node
    const tocHastTree = mdastUtilToHast(tocMdastTree)
    return tocHastTree
}

export default async function serializeMdxSource(markdownFile: MarkdownFile) {
    let toc: Node | undefined

    /** This is a remark plugin which is created here so that we can capture the
     * toc result, which otherwise we would not be able to capture because it's
     * not part of the serialized output. */
    const extractTocPlugin = () => (tree: Node) => {
        toc = extractTableOfContents(tree)
    }

    const serializeResult = await serialize(markdownFile.body, {
        mdxOptions: {
            remarkPlugins: [
                // Generate table of contents and insert it into the content.
                remarkToc,
                extractTocPlugin,
            ],
            rehypePlugins: [
                // Add "slug" IDs to each heading, for links and table of contents.
                rehypeSlug,

                // Add auto links to each heading.
                [
                    rehypeAutolinkHeadings,
                    {
                        properties: {
                            className: 'ms-2 small text-muted text-decoration-none reveal-on-hover-child',
                            title: 'Link to this section',
                        },
                        behavior: 'append',
                        content: { type: 'text', value: '#' },
                    },
                ],

                // Add classes to some elements for styling.
                [rehypeAddClasses, classesToAddToElements],

                // Highlight code blocks.
                [rehypePrism, { ignoreMissing: true }],
            ],
        },
    })

    return { toc, serializeResult }
}
