import { Request, Response, NextFunction, Application } from 'express'
import fetch from 'node-fetch'

import { ResultsObject } from '../interfaces/Search'

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

export const getSearch = async (request: Request, response: Response, next: NextFunction): Promise<Application | void> => {
    const { SEARCH_API_AUTH_TOKEN, SEARCH_API_URL } = process.env
    // TODO validation

    const data = {
        query: graphQLQuery,
        variables: { 
            query: request.body.query
        },
    }

    if (SEARCH_API_AUTH_TOKEN && SEARCH_API_URL) {
        const defaultOptions = {
            method: 'POST',
            headers: {
                Authorization: `token ${SEARCH_API_AUTH_TOKEN}`
            },
            body: JSON.stringify(data),
        }

        const getResponse = await fetch(SEARCH_API_URL, defaultOptions)
        if (getResponse) {
            const fetchedResults = await getResponse.json() as { 
                data: {
                    search: {
                        results: {
                            results: ResultsObject[]
                        }
                    }
                }
            }
            
            response.status(200).send(fetchedResults.data.search.results.results)
        }
    }

    return next()
}
