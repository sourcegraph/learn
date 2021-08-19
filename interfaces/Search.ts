export interface ResultsArray {
    [index: number]: ResultsObject
}

export interface ResultsObject {
    typeName: string
    repository: RepositoryMatch
    file: FileMatch
    lineMatches: LineMatch[]
}

export interface RepositoryMatch {
    name: string
    url: string
}

export interface FileMatch {
    path: string
    url: string
    commit: Node
}

export interface LineMatch {
    preview: string
    lineNumber: number
    offsetAndLengths: number[][]
    limitHit: boolean
}

export interface HookResultsObject {
    results?: ResultsObject[]
    query: string
    setQuery: (query: string) => void
    url: string
    setUrl: (url: string) => void
    authToken: string
    setAuthToken: (authToken: string) => void
}
