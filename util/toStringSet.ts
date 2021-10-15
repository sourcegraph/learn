const toStringSet = (array: string[]): Set<string> => {
    const set = new Set<string>()
    array.map(item => {
        if (!set.has(item)) {
            set.add(item)
        }
    })

    return set
}

export default toStringSet
