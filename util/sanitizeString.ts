const sanitizeString = (string: string): string => {
    // Regex for zero-width space characters
    const zeroWidthRegex = /\u200B/g

    return string
        .split(' ')
        .filter(item => item !== '')
        .map(item => item.replace(zeroWidthRegex, ''))
        .join(' ')
}

export default sanitizeString
