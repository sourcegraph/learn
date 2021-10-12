import Script from 'next/script'
import { FunctionComponent } from 'react'

import { StyledIframe } from './GoogleTagManagerStyles'

const GTM = process.env.NEXT_PUBLIC_GTM_ID ?? ''

/**
 * Google Tag Manager script tag. This should be rendered in the <head>.
 */
export const GoogleTagManagerScriptTag: FunctionComponent = () => (
    <>
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${GTM}`} />

        <Script strategy="lazyOnload">
            {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM}');
            `}
        </Script>
    </>
)

/**
 * Google Tag Manager (noscript). This is a JS-disabled fallback for the GTM
 * script. This should be rendered in the <body> element (ideally right after
 * the opening <body> tag).
 */
export const GoogleTagManagerNoscriptFrame: FunctionComponent = () => (
    <noscript>
        <StyledIframe
            title="google-tag-manager-noscript-frame"
            src={`https://www.googletagmanager.com/ns.html?id=${GTM}`}
        />
    </noscript>
)
