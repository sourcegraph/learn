import Container from '@components/atoms/Container'
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
        <Head>
            <title>{props.metaTags.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:type" content={props.metaTags.type} />
            <meta property="og:title" content={props.metaTags.title} />
            <meta property="og:image" content={props.metaTags.image} />
            <meta property="og:url" content={props.metaTags.url} />
            <meta name="description" content={props.metaTags.description} />
            <meta property="og:description" content={props.metaTags.description} />
            {props.metaTags.author && (
                <>
                    <meta property="article:author" content={props.metaTags.author} />
                    <meta name="author" content={props.metaTags.author} />
                </>
            )}
        </Head>

        <NavBar />

        <Container>
            <section>{props.children}</section>
        </Container>

        <Footer />
    </>
)

export default Layout
