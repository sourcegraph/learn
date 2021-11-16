import MoonWaningCrescentIcon from 'mdi-react/MoonWaningCrescentIcon'
import { createContext } from 'react'

export const ThemeContext = createContext({
    theme: '',
    toggleTheme: () => {},
    logo: '',
    sgLogo: '',
    isDark: false,
})
