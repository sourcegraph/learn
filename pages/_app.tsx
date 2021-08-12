import { AppProps } from 'next/app'
import { FunctionComponent } from 'react'

import '@styles/styles.scss'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />

export default App
