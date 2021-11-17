export default interface DarkModeHookObject {
    theme: string
    toggleTheme: (theme: string) => void
    sgLogo: string
    isDark: boolean
}
