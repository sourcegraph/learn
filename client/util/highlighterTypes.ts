const highlighterTypes = (matcher: string, patternType: string): string => {
    if (matcher.includes(':')) {
        return 'filters'
    }
    if (matcher.includes('and')) {
        return 'andCondition'
    }
    if (matcher.includes(' ') && patternType === 'regexp') {
        return 'regexpMultiples'
    }

    return 'none'
}

export default highlighterTypes
