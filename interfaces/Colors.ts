/**
 * Colors for themes (light/dark mode)
 */

export interface Color {
    [dark: string]: string
    light: string
}

export interface ColorObject {
    [index: string]: Color
}
