const regexTestString = (input: string, term: string): boolean => {
    const regex = new RegExp(`${term}`, 'i')

    return regex.test(input)
}

export default regexTestString
