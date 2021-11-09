import { COLORS } from './colors.js'

(function () {
    const localTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const root = document.documentElement
    const setColors = (object, theme) => {
        for (const [key, value] of Object.entries(object)) {
            const cssVarName = `--${key}`
        
            root.style.setProperty(cssVarName, value[theme])
        }
    }
    if (prefersDark && !localTheme) {
        root.style.setProperty('--theme', 'dark')
        setColors(COLORS, 'dark')
    }
    if (localTheme) {
        root.style.setProperty('--theme', localTheme)
        if (localTheme === 'dark') {
            setColors(COLORS, 'dark')
        } else {
            setColors(COLORS, 'light')
        }
    }
})()
