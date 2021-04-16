import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
// TODO: update these CSS imports once we settle on a CSS strategy.
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Footer.scss'
import '../styles/typography.scss'
import * as gtag from '../lib/gtag'

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    useEffect(() => {
      const handleRouteChange = (url: URL) => {
        gtag.pageview(url)
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }, [router.events])
    return <Component {...pageProps} />
  }
