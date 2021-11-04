(function () {
    const localTheme = window.localStorage.getItem('theme')
    const isDark = localTheme === 'dark'
    const root = document.documentElement
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

