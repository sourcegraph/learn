import DarkModeHookObject from '@interfaces/DarkModeHookObject'
import { useState, useEffect, useCallback } from 'react'

export const useDarkMode = (): DarkModeHookObject => {
    const [theme, setTheme] = useState<string>('light')
    const [mounted, setMounted] = useState<boolean>(false)

    const setCurrentTheme = (theme: string): void => {
        window.localStorage.setItem('theme', theme)
        setTheme(theme)
    }

    const checkLocal = useCallback(() => {
        const localTheme = window.localStorage.getItem('theme')
        return localTheme
            ? setCurrentTheme(localTheme)
            : setCurrentTheme('light')
    }, [])

    const toggleTheme = (): void => theme === 'light'
        ? setCurrentTheme('dark')
        : setCurrentTheme('light')

    useEffect(() => {
        checkLocal()
        setMounted(true)
    }, [checkLocal])

    useEffect(() => {
        checkLocal()
    }, [theme, checkLocal])

    return {
        theme,
        toggleTheme,
        mounted
    }
}

export default useDarkMode
