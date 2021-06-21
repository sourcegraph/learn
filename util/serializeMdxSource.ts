import { serialize } from 'next-mdx-remote/serialize'
import { MarkdownFile } from './loadMarkdownFile'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypePrism from '@mapbox/rehype-prism'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeAddClasses from 'rehype-add-classes'

/**
 * Classes to add to elements in the rendered markdown (after the HTML is
 * generated). This is used to add utility styles to elements in markdown
 * content. The `rehype-add-classes` plugin performs this task.
 */
const classesToAddToElements = {
    'h1,h2,h3,h4,h5,h6': 'mt-5 mb-4 reveal-on-hover-parent',
    img: 'w-100 mt-5',
}

export default function serializeMdxSource(markdownFile: MarkdownFile) {
    return serialize(markdownFile.body, {
        mdxOptions: {
            remarkPlugins: [
                // Generate table of contents and insert it into the content.
                remarkToc,
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
}
