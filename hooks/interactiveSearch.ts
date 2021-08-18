import { ResultsArray, ResultsObject, HookResultsObject, HookInterface } from '@interfaces/Search'
import { fetchResults } from '@lib/fetch'
import { useState, useEffect } from 'react'

const useInteractiveSearch = (hook: HookInterface): HookResultsObject  => {
    const [query, setQuery] = useState(hook.query)
    const [url, setUrl] = useState(hook.url)
    const [authToken, setAuthToken] = useState(hook.authToken)
    const [results, setResults] = useState<ResultsObject | undefined>()

    useEffect(() => {
        const results = async (): Promise<ResultsObject | undefined> => {
            const fetchedData = await fetchResults(hook.url, hook.authToken, hook.query.trim())
            return fetchedData
        }
        results()
        .then(results => setResults(results))
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
