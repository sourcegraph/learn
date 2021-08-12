const returnHeaders = (string: string): string[] | null => {
    const regex = /^(### |## )(.*)\n/gm
    const headerRegex = /^(### |## )(.*)/gi
    const matchHeaders = string.match(regex)
    return matchHeaders
        ? matchHeaders.map(match => match.trim().replace(headerRegex, '$2'))
        : null
  }
  
  export default returnHeaders
