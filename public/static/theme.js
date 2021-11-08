(function () {
    const localTheme = window.localStorage.getItem('theme')
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const prefersDarkFromMQ = mql.matches
    const isDark = localTheme === 'dark'
    const root = document.documentElement
    if (prefersDarkFromMQ && !localTheme) {
        root.style.setProperty('--theme', 'dark')
        root.style.setProperty('--text-color', '#fff')
        root.style.setProperty('--background-color', '#14171f')
        window.localStorage.setItem('logo', '/static/images/sourcegraph-learn-dark.svg')
        window.localStorage.setItem('sg-logo', '/static/images/sourcegraph-logo-dark.svg')
    }
    if (localTheme) {
        root.style.setProperty('--theme', localTheme)
        if (isDark) {
            root.style.setProperty('--text-color', '#fff')
            root.style.setProperty('--background-color', '#14171f')
        } else {
            root.style.setProperty('--text-color', '#212529')
            root.style.setProperty('--background-color', '#fff')
        }
    }
})()

