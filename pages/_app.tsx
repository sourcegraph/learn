import { GoogleTagManagerScriptTag } from '@components/atoms/GoogleTagManager'
import { GlobalStyles } from '@components/themes/globalStyles'
import { lightTheme, darkTheme } from '@components/themes/themes'
import { ThemeContext } from '@hooks/contexts/theme'
import useDarkMode from '@hooks/darkMode'
import { AppProps } from 'next/app'
import Script from 'next/script'
import React, { FunctionComponent, ReactNode } from 'react'

import '@styles/styles.scss'

interface Props {
    children: ReactNode
}

const AppWrapper: FunctionComponent<Props> = ({ children }) => {
    const theme = useDarkMode()
    const themeStyles = theme.theme === 'light'
        ? lightTheme
        : darkTheme

    if (!theme.mounted) {
        return (
            <div />
        )
    }

    return (
        <ThemeContext.Provider value={theme}>
            <GlobalStyles text={themeStyles.text} background={themeStyles.background} />
            {children}
        </ThemeContext.Provider>
    )
}

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
    <AppWrapper>
        <>
            <GoogleTagManagerScriptTag />
            <Script strategy='lazyOnload'>
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
    </AppWrapper>
)

export default App
