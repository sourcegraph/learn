import { AppProps } from 'next/app'

// TODO: update these CSS imports once we settle on a CSS strategy.
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Footer.scss'
import '../styles/typography.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
