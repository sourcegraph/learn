import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Dropdown, Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'

// TODO: update these CSS imports once we settle on a CSS strategy.
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Footer.scss'
import '../styles/typography.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
