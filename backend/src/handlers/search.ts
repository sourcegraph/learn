import { Request, Response, NextFunction } from 'express'

import { isString } from '../util/types'

interface RequestError {
    message: string
}

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

export const getSearch = async (request: Request, response: Response, next: NextFunction): Promise<NextFunction | void> => {
    const { SEARCH_API_AUTH_TOKEN, SEARCH_API_URL } = process.env

    if (!request) {
        const error: RequestError = {
            message: 'Incorrect request'
        }
        return next(error)
    }

    // TODO validation

    const data = {
        query: graphQLQuery,
        variables: { 
            request
        },
    }

    if (SEARCH_API_AUTH_TOKEN && SEARCH_API_URL) {
        response.status(200)
        response.send({
            Authorization: `token ${SEARCH_API_AUTH_TOKEN}`,
            url: SEARCH_API_URL,
            data,
        })
    }

    return next()
}
