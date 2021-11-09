(function () {
    const localTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    const prefersDarkFromMQ = prefersDark.matches
    const isDark = localTheme === 'dark'
    const root = document.documentElement
    if (prefersDarkFromMQ && !localTheme) {
        root.style.setProperty('--theme', 'dark')
        root.style.setProperty('--text-color', '#fff')
        root.style.setProperty('--background-color', '#14171f')
    }
    if (localTheme) {
        root.style.setProperty('--theme', localTheme)
        if (isDark) {
            root.style.setProperty('--text-color', '#fff')
            root.style.setProperty('--background-color', '#14171f')
            root.style.setProperty('--primary-link-color', '#bfbfff')
        } else {
            root.style.setProperty('--text-color', '#212529')
            root.style.setProperty('--background-color', '#fff')
            root.style.setProperty('--primary-link-color', '#5033e1')
        }
    }
})()
