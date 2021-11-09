import { ColorObject } from '@interfaces/Colors'
import DarkModeHookObject from '@interfaces/DarkModeHookObject'
import { COLORS } from '@public/static/colors'
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
        if (theme === 'dark') {
            setLogo('/static/images/sourcegraph-learn-dark.svg')
            setSgLogo('/static/images/sourcegraph-logo-dark.svg')
        }
    }

    const updateTheme = useCallback(() => {
        const root = document.documentElement
        const setColors = (object: ColorObject, theme: string): void => {
            for (const [key, value] of Object.entries(object)) {
                const cssVarName = `--${key}`
            
                root.style.setProperty(cssVarName, value[theme])
            }
        }
        if (isDark) {
            setColors(COLORS, 'dark')
            setLogo('/static/images/sourcegraph-learn-dark.svg')
            setSgLogo('/static/images/sourcegraph-logo-dark.svg')
        } else {
            setColors(COLORS, 'light')
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
