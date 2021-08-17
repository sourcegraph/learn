const graphQLQuery = `fragment FileMatchFields on FileMatch {
    repository {
        name
        url
    }
    file {
        path
        url
        commit {
            oid
        }
    }
    lineMatches {
        preview
        lineNumber
        offsetAndLengths
    }
}

fragment CommitSearchResultFields on CommitSearchResult {
    messagePreview {
        value
        highlights{
            line
            character
            length
        }
    }
    diffPreview {
        value
        highlights {
            line
            character
            length
        }
    }
    label {
        html
    }
    url
    matches {
        url
        body {
            html
            text
        }
        highlights {
            character
            line
            length
        }
    }
    commit {
        repository {
            name
        }
        oid
        url
        subject
        author {
            date
            person {
                displayName
            }
        }
    }
}

fragment RepositoryFields on Repository {
    name
    url
    externalURLs {
    serviceType
    url
    }
    label {
        html
    }
}

fragment SearchResultsAlertFields on SearchResults {
    alert {
        title
        description
        proposedQueries {
            description
            query
        }
    }
}

query ($query: String!) {
    search(query: $query) {
    results {
        results{
        __typename
        ... on FileMatch {
            ...FileMatchFields
        }
        ... on CommitSearchResult {
            ...CommitSearchResultFields
        }
        ... on Repository {
            ...RepositoryFields
        }
        }
        limitHit
        cloning {
        name
        }
        missing {
        name
        }
        timedout {
        name
        }
        resultCount
        elapsedMilliseconds
        ...SearchResultsAlertFields
    }
  }
}
`

interface SearchResults {
    results: ResultsArray[] | undefined
}

interface ResultsObject {
    typeName: string
    repository: RepositoryMatch
    file: FileMatch
    lineMatches: Node
}

interface ResultsArray {
    [index: number]: ResultsObject
}

interface RepositoryMatch {
    repository: Node
}

interface FileMatch {
    file: Node
}

export const fetchEndpoint = async (url: string, token: string, query: string): Promise<Response> => {
    const data = {
        query: graphQLQuery,
        variables: { 
            query
        },
    }

    const defaultOptions = {
        method: 'POST',
        headers: {
            Authorization: `token ${token}`
        },
        body: JSON.stringify(data),
    };
    const response = await fetch(url, defaultOptions);

    if (!response.ok) {
        console.error(response.statusText);
        console.error(response.status)
        throw new Error(`Failed to fetch API: ${url}`);
    }

    return response;
};
  
export const fetchResults = async (url?: string, token?: string, query?: string): Promise<{} | null> => {
    if (url && token && query) {
        const response = await fetchEndpoint(url, token, query)
        const fetchedResults = await response.json() as { 
            data: {
                search: {
                    results: {
                        results: ResultsArray[]
                    }
                }
            }
        }
    
        if (!fetchedResults.data) {
            throw new Error(`Failed to fetch API: ${url}`)
        }
        const [ results ] = fetchedResults.data.search.results.results
    
        return results
    }
 
    return null
};
