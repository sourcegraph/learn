const returnHeaders = (string: string): string[] | null => {
    const regex = /^(###|##)\s(.*)\n/gm
    const headerRegex = /^(###|##)\s(.*)/gi
    const matchHeaders = string.match(regex)
    return matchHeaders
        ? matchHeaders.map(match => match.trim())
        : null
  }
  
  export default returnHeaders
