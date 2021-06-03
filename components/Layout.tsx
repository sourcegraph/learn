import * as React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import { GoogleTagManagerScriptTag, GoogleTagManagerNoscriptFrame } from './GoogleTagManager'
import { googleTagManagerId } from '../posts/site-config'
import NavBar from './NavBar'

interface LayoutProps {
    contentTitle?: string
    title?: string

    meta?: {
        description?: string
        image?: string
        icon?: string
    }
    location?: {
        pathname?: string
    }
    children: React.ReactNode
    minimal?: boolean

    hero?: React.ReactFragment
    heroAndHeaderClassName?: string

    className?: string
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

    const defaultMetaProps: LayoutProps['meta'] = {
        description: 'Find and fix things across all of your code with Sourcegraph universal code search.',
        image: 'https://about.sourcegraph.com/sourcegraph-mark.png',
    }
    const metaProps = { ...defaultMetaProps, ...props.meta }

    return (
        <>
            <GoogleTagManagerNoscriptFrame id={googleTagManagerId} />
            <Head>
                <GoogleTagManagerScriptTag id={googleTagManagerId} />
                <title>{title}</title>
                <link href="/favicon.png" rel="icon" type="image/png"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=PT+Sans:wght@700&display=swap"
                    rel="stylesheet"
                />
                <meta property="og:title" content={title} />
                <meta property="og:image" content="https://about.sourcegraph.com/sourcegraph-mark.png" />
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
