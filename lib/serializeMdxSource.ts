import MarkdownFile from '@interfaces/MarkdownFile'
import rehypePrism from '@mapbox/rehype-prism'
import returnHeaders from '@util/returnHeaders'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeAddClasses from 'rehype-add-classes'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

export default async function serializeMdxSource(
    markdownFile: MarkdownFile
): Promise<{ toc?: string[] | null; serializeResult: MDXRemoteSerializeResult }> {
    const toc = returnHeaders(markdownFile.body)

    const classesToAddToElements = {
        'h1,h2,h3,h4,h5,h6': 'reveal-on-hover-parent'
    }

    const serializeResult = await serialize(markdownFile.body, {
        mdxOptions: {
            rehypePlugins: [
                // Add "slug" IDs to each heading, for links and table of contents.
                rehypeSlug,

                // Add auto links to each heading.
                [
                    rehypeAutolinkHeadings,
                    {
                        properties: {
                            className: 'reveal-on-hover-child',
                            title: 'Link to this section',
                        },
                        behavior: 'append',
                        content: { type: 'text', value: '#' },
                    },
                ],

                // Add classes to some elements for styling.
                [rehypeAddClasses, classesToAddToElements],
            ],
        },
    })

    return { toc, serializeResult }
}
