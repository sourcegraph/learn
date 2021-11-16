import { GoogleTagManagerNoscriptFrame } from '@components/atoms/GoogleTagManager'
import { SetThemeTag } from '@components/themes/theme'
import Document, { Head, Html, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  public render(): JSX.Element {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <link href="https://storage.googleapis.com/sourcegraph-assets/learn/favicon.png" rel="icon" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=PT+Sans:wght@700&display=swap"
          />
          {/* Prism theme for syntax highlighting */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/themes/prism.min.css" />
        </Head>
        <body>
          <SetThemeTag />
          <GoogleTagManagerNoscriptFrame />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (context: DocumentContext) => {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = context.renderPage

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(context)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
}
