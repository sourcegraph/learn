const returnHighlightIndices = (input: string, matcher: string, matcherSet: Set<string>, regex: RegExp): Set<number> => {
    const inputArray = input.split(/([^\w".])/).filter(item => item !== '')
    const matcherArray = matcher.split(/([^\w".])/).filter(item => item !== '')

    // Get the starting index of the matching subarray to match punctuation indices within that array
    let startingIndex = inputArray.indexOf(matcherArray[0])
    let index = inputArray.indexOf(matcherArray[0])
    const indices = []
    while (index !== -1) {
        indices.push(index)
        index = inputArray.indexOf(matcherArray[0], index + 1)
    }
    if (indices.length > 1) {
        for (index of indices) {
            if (matcherSet.has(inputArray[index]) && matcherSet.has(inputArray[index + 1])) {
                startingIndex = index
            }
        }
    }
    const punctuationIndicesArray = new Set<number>()
    // Find indices of highlighted punctuation
    for (let index = startingIndex; index < startingIndex + matcherArray.length; index++) {
        if (regex.test(inputArray[index]) && matcherSet.has(inputArray[index])) {
            punctuationIndicesArray.add(index)
        }
    }
    return punctuationIndicesArray
}

export default returnHighlightIndices
