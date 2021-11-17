import { FunctionComponent } from 'react'

interface Color {
    [dark: string]: string
    light: string
}
interface ColorObject {
    [index: string]: Color
}

const getLocalTheme = (): void => {
    const COLORS = {
        'text-color': {
            light: '#212529',
            dark: '#fff',
        },
        'background-color': {
            light: '#fff',
            dark: '#14171f',
        },
        'primary-link-color': {
            light: '#5033e1',
            dark: '#bfbfff',
        },
        'logo-image': {
            light: "url('https://storage.googleapis.com/sourcegraph-assets/learn/logos/sourcegraph-learn.svg')",
            dark: "url('https://storage.googleapis.com/sourcegraph-assets/learn/logos/sourcegraph-learn-dark.svg')"
        }
    }
    const localTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const root = document.documentElement
    const setColors = (object: ColorObject, theme: string): void => {
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
}

export const SetThemeTag: FunctionComponent = () => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const localThemeFunction = `(${getLocalTheme})()`

    return (
        <script dangerouslySetInnerHTML={{ __html: localThemeFunction }} />
    )
}
