const sluggifyHeaders = (string: string): string => {
    const headerRegex = /(^step\S\d\S)/gi
    return string.replace(headerRegex, '$1-')
}

export default sluggifyHeaders
