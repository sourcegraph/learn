/**
 * Colors for themes (light/dark mode)
 */

export interface ColorObject {
    [property: string]: Color
}

export interface Color {
    [light: string]: string
    dark: string
}
