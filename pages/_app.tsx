import { AppProps } from 'next/app'
import React from 'react'

// TODO: update these CSS imports once we settle on a CSS strategy.
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.scss'

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />

export default App
