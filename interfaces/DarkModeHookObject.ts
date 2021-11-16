export default interface DarkModeHookObject {
    theme: string
    toggleTheme: (theme: string) => void
    logo: string
    sgLogo: string
    isDark: boolean
}
