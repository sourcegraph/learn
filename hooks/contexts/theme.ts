import { createContext } from 'react'

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
    logo: 'https://storage.googleapis.com/sourcegraph-assets/learn/logos/sourcegraph-learn.svg',
    sgLogo: 'https://storage.googleapis.com/sourcegraph-assets/learn/logos/sourcegraph-logo.svg'
})
