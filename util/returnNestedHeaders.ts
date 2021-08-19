import TocHeader from '@interfaces/TocHeader'

const returnNestedHeaders = (header: string): TocHeader => {
    const nestedHeaderRegex = /^(#{3})\s(.*)/gi
    const headerRegex = /^(#{2})\s(.*)/gi
    const headerMatch = header.match(nestedHeaderRegex)
    if (headerMatch) {
        const parsedHeader = header.replace(nestedHeaderRegex, '$2')
        return {
            isNested: true,
            header: parsedHeader
        }
    } 
    const parsedHeader = header.replace(headerRegex, '$2')

    return {
        isNested: false,
        header: parsedHeader
    }
}

export default returnNestedHeaders
