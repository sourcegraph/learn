import { AppProps } from 'next/app'
import React from 'react'

import '../styles/styles.scss'

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />

export default App
