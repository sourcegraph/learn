import { ResultsObject, HookResultsObject } from '@interfaces/Search'
import { sourcegraphSearch } from '@lib/api/search'
import { useState, useEffect } from 'react'

const useInteractiveSearch = ({ initialSearchURL = '', initialQuery = '' }): HookResultsObject  => {
    const [query, setQuery] = useState(initialQuery)
    const [url, setURL] = useState(initialSearchURL)
    const [results, setResults] = useState<ResultsObject[] | null>(null)

    useEffect(() => {
        const results = async (): Promise<ResultsObject[] | null> => {
            const fetchedData = await sourcegraphSearch(url, query.trim())
            return fetchedData
        }
        results()
        .then(results => {
            if (results) {
                setResults(results)
            }
        })
        .catch(error => {
            throw error
        })

    }, [url, query])
    
    return {
        results,
        query, 
        setQuery,
        url,
        setURL,
    }
}

export default useInteractiveSearch
