import { createContext } from 'react'

export const ThemeContext = createContext({
    theme: '',
    toggleTheme: () => {},
    logo: '',
    sgLogo: '',
    isDark: false,
    toggleLogo: '',
})
