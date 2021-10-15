const returnHighlightIndices = (input: string, matcher: string, matcherSet: Set<string>, regex: RegExp): Set<number> => {
    const inputArray = input.split(/(\W)/).filter(item => item !== '')
    const matcherArray = matcher.split(/(\W)/).filter(item => item !== '')
    const startingIndex = inputArray.indexOf(matcherArray[0])
    const punctuationIndicesArray = new Set<number>()
    for (let index = startingIndex; index < startingIndex + matcherArray.length; index++) {
        if (regex.test(inputArray[index]) && matcherSet.has(inputArray[index])) {
            punctuationIndicesArray.add(index)
        }
    }
    return punctuationIndicesArray
}

export default returnHighlightIndices
