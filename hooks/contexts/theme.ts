import { createContext } from 'react'

export const ThemeContext = createContext({
    theme: '',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    toggleTheme: (theme: string) => {},
    logo: '',
    sgLogo: '',
    isDark: false,
})
