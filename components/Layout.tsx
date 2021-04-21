import * as React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
    meta?: {
        title?: string
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

export default function Layout(props: LayoutProps) {
    const defaultMetaProps: LayoutProps['meta'] = {
        title: 'Sourcegraph - Universal Code Search',
        description: 'Find and fix things across all of your code with Sourcegraph universal code search.',
        image: 'https://about.sourcegraph.com/sourcegraph-mark.png',
        icon: 'https://about.sourcegraph.com/favicon.png',
    }
    const metaProps = { ...defaultMetaProps, ...props.meta }

    return (
        <div className={`flex flex-column fill-height ${props.className || ''}`}>
            <Head>
                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TB4NLS7');`,
                    }}
                />
                {/* End Google Tag Manager */}

                <title>{metaProps.title}</title>

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:300,400,600,700" rel="stylesheet" />
                <link
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-TB4NLS7"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}
            </body>
            <div className={props.heroAndHeaderClassName}>
                <Header minimal={props.minimal} className={`${props.className || ''}`} />
                {props.hero}
            </div>
            <section className="d-flex flex-column fill-height">{props.children}</section>
            <Footer minimal={props.minimal} />
        </div>
    )
}
