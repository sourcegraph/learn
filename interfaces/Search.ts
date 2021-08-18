export interface ResultsArray {
    results: ResultsObject
}

export interface ResultsObject {
    typeName: string
    repository: RepositoryMatch
    file: FileMatch
    lineMatches: Node
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

export interface HookInterface {
    url: string
    authToken: string
    query: string
}

export interface HookResultsObject {
    results?: ResultsObject
    query: string
    setQuery: (query: string) => void
    url: string
    setUrl: (url: string) => void
    authToken: string
    setAuthToken: (authToken: string) => void
}
