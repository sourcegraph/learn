import { GetStaticProps } from 'next'
import Head from 'next/head'
import * as React from 'react'

import { googleTagManagerId } from '../posts/site-config'

import Footer from './Footer'
import { GoogleTagManagerScriptTag, GoogleTagManagerNoscriptFrame } from './GoogleTagManager'
import NavBar from './NavBar'

const defaultMetaTags = {
    description: 'Find and fix things across all of your code with Sourcegraph universal code search.',
    image: 'https://about.sourcegraph.com/sourcegraph-mark.png',
} as const

export interface MetaTags {
    image?: string
    description?: string
}
interface LayoutProps {
    contentTitle?: string
    title?: string

    metaTags?: MetaTags

    location?: {
        pathname?: string
    }
    children: React.ReactNode
    minimal?: boolean

    hero?: React.ReactFragment
    heroAndHeaderClassName?: string

    className?: string

    publicUrl?: string
}

function createTitle(contentTitle: string) {}

export default function Layout(props: LayoutProps) {
    const siteTitle = 'Sourcegraph Learn'
    let title = siteTitle
    if (props.title) {
        title = props.title
    } else if (props.contentTitle) {
        title = `${props.contentTitle} - ${siteTitle}`
    }

    // If the image is relative, prefix it with the public URL, because meta image tags expect an absolute URL.
    const metaDescription = props.metaTags?.description ?? defaultMetaTags.description
    let metaImage = props.metaTags?.image ?? defaultMetaTags.image
    if (metaImage && !metaImage.startsWith('http') && props.publicUrl) {
        metaImage = props.publicUrl + metaImage
    }

    return (
        <>
            <GoogleTagManagerNoscriptFrame id={googleTagManagerId} />
            <Head>
                <GoogleTagManagerScriptTag id={googleTagManagerId} />
                <title>{title}</title>
                <link href="/favicon.png" rel="icon" type="image/png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=PT+Sans:wght@700&display=swap"
                    rel="stylesheet"
                />
                {/* Prism theme for syntax highlighting */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/themes/prism.min.css" />

                <meta property="og:title" content={title} />
                <meta property="og:image" content={metaImage} />
                <meta property="description" content={metaDescription} />
                <meta property="og:description" content={metaDescription} />
            </Head>

            <div className="container">
                <div className="row">
                    <NavBar />
                </div>

                <section>{props.children}</section>
                <Footer minimal={props.minimal} />
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps<Pick<LayoutProps, 'publicUrl'>> = async context => ({
        props: {
            publicUrl: process.env.DEPLOY_URL ?? '',
        },
    })
