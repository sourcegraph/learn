import Head from 'next/head'
import * as React from 'react'

import { googleTagManagerId } from '../site-config'

import Footer from './Footer'
import { GoogleTagManagerScriptTag, GoogleTagManagerNoscriptFrame } from './GoogleTagManager'
import NavBar from './NavBar'

const SITE_TITLE = 'Sourcegraph Learn'

const defaultMetaTags = {
    description: 'Sourcegraph Learn is an educational hub to support all developers.',
    image: 'https://learn.sourcegraph.com/headers/sourcegraph-learn-header.png',
} as const

export interface MetaTags {
    image?: string | null
    description?: string | null
    type?: string
}

export interface Props {
    /**
     * The document title (for <title> and meta tags). If absent, the site title will be used.
     */
    documentTitle?: string

    /**
     * Append the site title to the document title.
     */
    appendSiteTitle?: boolean

    metaTags?: MetaTags
}

const Layout: React.FunctionComponent<Props> = props => {
    let documentTitle = props.documentTitle
    if (!documentTitle) {
        documentTitle = SITE_TITLE
    } else if (props.appendSiteTitle) {
        documentTitle = `${documentTitle} - ${SITE_TITLE}`
    }

    const metaType = props.metaTags?.type ?? 'website'

    // If the image is relative, prefix it with the public URL, because meta image tags expect an absolute URL.
    const metaDescription = props.metaTags?.description ?? defaultMetaTags.description
    let metaImage = props.metaTags?.image ?? defaultMetaTags.image
    if (metaImage && !metaImage.startsWith('http') && process.env.NEXT_PUBLIC_URL) {
        metaImage = process.env.NEXT_PUBLIC_URL + metaImage
    }

    return (
        <>
            <GoogleTagManagerNoscriptFrame id={googleTagManagerId} />
            <Head>
                <GoogleTagManagerScriptTag id={googleTagManagerId} />
                <title>{documentTitle}</title>
                <link href="/favicon.png" rel="icon" type="image/png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=PT+Sans:wght@700&display=swap"
                    rel="stylesheet"
                />
                {/* Prism theme for syntax highlighting */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/themes/prism.min.css" />

                <meta property="og:type" content={metaType} />
                <meta property="og:title" content={documentTitle} />
                <meta property="og:image" content={metaImage} />
                <meta name="description" content={metaDescription} />
                <meta property="og:description" content={metaDescription} />
            </Head>

            <NavBar />

            <div className="container">
                <section>{props.children}</section>
            </div>

            <Footer />
        </>
    )
}

export default Layout
