import DarkModeHookObject from '@interfaces/DarkModeHookObject'
import { useState, useEffect, useCallback } from 'react'

export const useDarkMode = (): DarkModeHookObject => {
    const [theme, setTheme] = useState<string>('light')
    const [logo, setLogo] = useState<string>('https://storage.googleapis.com/sourcegraph-assets/learn/logos/sourcegraph-learn.svg')
    const [sgLogo, setSgLogo] = useState<string>('https://storage.googleapis.com/sourcegraph-assets/learn/logos/sourcegraph-logo.svg')
    const isDark = theme === 'dark'

    const setCurrentTheme = (theme: string): void => {
        window.localStorage.setItem('theme', theme)
        setTheme(theme)
    }

    const setCurrentLogo = (theme: string): void => {
        const logo = window.localStorage.getItem('logo')
        const sgLogo = window.localStorage.getItem('sg-logo')
        if (theme === 'dark') {
            if (!logo) {
                window.localStorage.setItem('logo', '/static/images/sourcegraph-learn-dark.svg')
            }
            if (!sgLogo) {
                window.localStorage.setItem('sg-logo', '/static/images/sourcegraph-logo-dark.svg')
            }
            setLogo('/static/images/sourcegraph-learn-dark.svg')
            setSgLogo('/static/images/sourcegraph-logo-dark.svg')
        }
    }

    const updateTheme = useCallback(() => {
        const root = document.documentElement
        if (isDark) {
            root.style.setProperty('--text-color', '#fff')
            root.style.setProperty('--background-color', '#14171f')
            setLogo('/static/images/sourcegraph-learn-dark.svg')
            setSgLogo('/static/images/sourcegraph-logo-dark.svg')
        } else {
            root.style.setProperty('--text-color', '#212529')
            root.style.setProperty('--background-color', '#fff')
            setLogo('https://storage.googleapis.com/sourcegraph-assets/learn/logos/sourcegraph-learn.svg')
            setSgLogo('https://storage.googleapis.com/sourcegraph-assets/learn/logos/sourcegraph-logo.svg')
        }

    }, [isDark])

    const checkLocalInitial = useCallback(() => {
        const localTheme = getComputedStyle(document.documentElement).getPropertyValue('--theme')
        setCurrentLogo(localTheme)
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
        toggleTheme,
        logo,
        sgLogo
    }
}

export default useDarkMode
