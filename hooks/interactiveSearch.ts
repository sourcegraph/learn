import { ResultsObject, HookResultsObject } from '@interfaces/Search'
import { fetchResults } from '@lib/fetch'
import { useState, useEffect } from 'react'

const useInteractiveSearch = ({ initialUrl = '', initialAuthToken = '', initialQuery = '' }): HookResultsObject  => {
    const [query, setQuery] = useState(initialQuery)
    const [url, setUrl] = useState(initialUrl)
    const [authToken, setAuthToken] = useState(initialAuthToken)
    const [results, setResults] = useState<ResultsObject[] | undefined>([])

    useEffect(() => {
        const results = async (): Promise<ResultsObject[] | undefined> => {
            const fetchedData = await fetchResults(url, authToken, query.trim())
            return fetchedData
        }
        results()
        .then(results => {
            setResults(results)
        })
        .catch(error => {
            throw error
        })

    }, [url, authToken, query])
    
    return {
        results,
        query, 
        setQuery,
        url,
        setUrl,
        authToken,
        setAuthToken,
    }
}

export default useInteractiveSearch
