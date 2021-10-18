const returnHighlightIndices = (input: string, matcher: string, matcherSet: Set<string>): Set<number> => {
    // Split input and matching strings so that they match the line array rendered by prism-react-renderer 
    const inputArray = input.split(/([^\w".])/).filter(item => item !== '')
    const matcherArray = matcher.split(/([^\w".])/).filter(item => item !== '')

    // Get the starting index of the matching subarray to match indices within that array
    let startingIndex = inputArray.indexOf(matcherArray[0])
    let index = inputArray.indexOf(matcherArray[0])
    const indices = []
    while (index !== -1) {
        indices.push(index)
        index = inputArray.indexOf(matcherArray[0], index + 1)
    }
    if (indices.length > 1) {
        for (index of indices) {
            // If this item and the next are in the matching string, this is the beginning of the matching subarray
            if (matcherSet.has(inputArray[index]) && matcherSet.has(inputArray[index + 1])) {
                startingIndex = index
            }
        }
    }
    const highlightIndicesArray = new Set<number>()
    for (let index = startingIndex; index < startingIndex + matcherArray.length; index++) {
        if (matcherSet.has(inputArray[index])) {
            highlightIndicesArray.add(index)
        }
    }
    return highlightIndicesArray
}

export default returnHighlightIndices
