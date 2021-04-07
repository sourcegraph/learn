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
    location: {
        pathname: string
    }
    children: React.ReactNode
    minimal?: boolean

    hero?: React.ReactFragment
    heroAndHeaderClassName?: string

    className?: string
}

export default class Layout extends React.PureComponent<LayoutProps> {
    public render(): JSX.Element | null {
        const defaultMetaProps: LayoutProps['meta'] = {
            title: 'Sourcegraph - Universal Code Search',
            description: 'Find and fix things across all of your code with Sourcegraph universal code search.',
            image: 'https://about.sourcegraph.com/sourcegraph-mark.png',
            icon: 'https://about.sourcegraph.com/favicon.png',
        }
        const pathname = '/' //this.props.location.pathname
        const isHome = pathname === '/'
        const isBlog = true //pathname === '/blog'
        const isProductPage = pathname.startsWith('/product/')
        const metaProps = { ...defaultMetaProps, ...this.props.meta }

        return (
            <div className={`flex flex-column fill-height ${this.props.className || ''}`}>
                <Head>
                    <title>{metaProps.title}</title>

                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <div className={this.props.heroAndHeaderClassName}>
                    <Header minimal={this.props.minimal} className={`${this.props.className || ''}`} />
                    {this.props.hero}
                </div>
                <section className="d-flex flex-column fill-height">{this.props.children}</section>
                <Footer minimal={this.props.minimal} />
            </div>
        )
    }
}
