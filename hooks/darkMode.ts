import DarkModeHookObject from '@interfaces/DarkModeHookObject'
import { useState, useEffect, useCallback } from 'react'

export const useDarkMode = (): DarkModeHookObject => {
    const [theme, setTheme] = useState<string>('light')
    const isDark = theme === 'dark'

    const setCurrentTheme = (theme: string): void => {
        window.localStorage.setItem('theme', theme)
        setTheme(theme)
    }

    const updateTheme = useCallback(() => {
        const root = document.documentElement
        if (isDark) {
            root.style.setProperty('--text-color', '#fff')
            root.style.setProperty('--background-color', '#14171f')
        } else {
            root.style.setProperty('--text-color', '#212529')
            root.style.setProperty('--background-color', '#fff')
        }

    }, [isDark])

    const checkLocalInitial = useCallback(() => {
        const localTheme = getComputedStyle(document.documentElement).getPropertyValue('--theme')
        return localTheme
            ? setCurrentTheme(localTheme)
            : setCurrentTheme('light')
    }, [])

    const toggleTheme = (): void => isDark ?
        setCurrentTheme('light')
        : setCurrentTheme('dark')

    useEffect(() => {
        checkLocalInitial()
    }, [checkLocalInitial])

    useEffect(() => {
        updateTheme()
    }, [theme, updateTheme])

    return {
        theme,
        toggleTheme
    }
}

export default useDarkMode
