import { AppProps } from 'next/app'
// TODO: update these CSS imports once we settle on a CSS strategy.
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Footer.scss'
import '../styles/typography.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
