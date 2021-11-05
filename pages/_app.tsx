import { GoogleTagManagerScriptTag } from '@components/atoms/GoogleTagManager'
import { AppProps } from 'next/app'
import Script from 'next/script'
import { FunctionComponent } from 'react'

import '@styles/styles.scss'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
    <>
        <GoogleTagManagerScriptTag />
        <Script id="Swiftype" strategy='lazyOnload'>
        {`
            (function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){
                (w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);
                e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);
                })(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');
                
                _st('install','kyHsdbiTxQgtRvcQc9rv','2.0.0');
        `}
        </Script>

        <Component {...pageProps} />
    </>
)

export default App
