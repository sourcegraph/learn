import { ResultsObject } from '@interfaces/Search'

const graphQLQuery = `fragment FileMatchFields on FileMatch {  
    repository {
        name
        url
    }
    file {
        name
        path
        url
        content
        commit {
        oid
        }
    }
    lineMatches {
        preview
        lineNumber
        offsetAndLengths
        limitHit
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
export const fetchEndpoint = async (query: string): Promise<Response | null> => {
    const url = process.env.NEXT_PUBLIC_SEARCH_API_URL
    const token = process.env.NEXT_PUBLIC_SEARCH_API_AUTH_TOKEN
    const data = {
        query: graphQLQuery,
        variables: { 
            query
        },
    }

    if (url && token) {
        const defaultOptions = {
            method: 'POST',
            headers: {
                Authorization: `token ${token}`
            },
            body: JSON.stringify(data),
        }
        const response = await fetch(url, defaultOptions)
        if (!response.ok) {
            console.error(response.statusText);
            console.error(response.status)
            throw new Error(`Failed to fetch API: ${url}`);
        }
    
        return response
    }
    
    return null
}
  
export const fetchResults = async (query: string): Promise<ResultsObject[] | undefined> => {
        const response = await fetchEndpoint(query)
        const fetchedResults = await response?.json() as { 
            data: {
                search: {
                    results: {
                        results: ResultsObject[]
                    }
                }
            }
        }

        if (!fetchedResults.data) {
            throw new Error('Failed to fetch API')
        }
      
        return fetchedResults.data.search.results.results
}
