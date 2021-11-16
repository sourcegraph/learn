import { COLORS } from '@components/themes/colors'
import { ColorObject } from '@interfaces/Colors'
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

    const setCurrentAssets = (theme: string): void => {
        if (theme === 'dark') {
            setLogo('/static/images/sourcegraph-learn-dark.svg')
            setSgLogo('/static/images/sourcegraph-logo-dark.svg')
        } else {
            setLogo('https://storage.googleapis.com/sourcegraph-assets/learn/logos/sourcegraph-learn.svg')
            setSgLogo('https://storage.googleapis.com/sourcegraph-assets/learn/logos/sourcegraph-logo.svg')
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
            setCurrentAssets(theme)
        } else {
            setColors(COLORS, 'light')
            setCurrentAssets(theme)
        }

    }, [isDark, theme])

    const checkLocalInitial = useCallback(() => {
        const localTheme = getComputedStyle(document.documentElement).getPropertyValue('--theme')
        setCurrentAssets(localTheme)
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
        sgLogo,
        isDark,
    }
}

export default useDarkMode
