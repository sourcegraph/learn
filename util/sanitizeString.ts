const sanitizeString = (string: string): string => {
    // Regex for zero-width space characters
    const zeroWidthRegex = /\u200B/g

    return string.trim().replace(zeroWidthRegex, '')
}

export default sanitizeString
