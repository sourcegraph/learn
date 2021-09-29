import Container from '@components/atoms/Container'
import { GoogleTagManagerScriptTag, GoogleTagManagerNoscriptFrame } from '@components/atoms/GoogleTagManager'
import Footer from '@components/Footer'
import NavBar from '@components/NavBar'
import MetaTags from '@interfaces/MetaTags'
import Head from 'next/head'
import { FunctionComponent } from 'react'

export interface Props {
    metaTags: MetaTags
}

const Layout: FunctionComponent<Props> = props => (
    <>
        <GoogleTagManagerNoscriptFrame />
        <GoogleTagManagerScriptTag />
        <Head>
            <title>{props.metaTags.title}</title>
            <link href="https://storage.googleapis.com/sourcegraph-assets/learn/favicon.png" rel="icon" type="image/png" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=PT+Sans:wght@700&display=swap"
            />
            {/* Prism theme for syntax highlighting */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/themes/prism.min.css" />

            <meta property="og:type" content={props.metaTags.type} />
            <meta property="og:title" content={props.metaTags.title} />
            <meta property="og:image" content={props.metaTags.image} />
            <meta name="description" content={props.metaTags.description} />
            <meta property="og:description" content={props.metaTags.description} />
        </Head>

        <NavBar />

        <Container>
            <section>{props.children}</section>
        </Container>

        <Footer />
    </>
)

export default Layout
