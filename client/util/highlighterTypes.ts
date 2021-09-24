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
    if (matcher.match(/\(|\)/gi) && patternType === 'regexp') {
        return 'regexpMatchingGroup'
    }

    return 'none'
}

export default highlighterTypes
