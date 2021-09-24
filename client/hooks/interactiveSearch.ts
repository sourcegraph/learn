import { ResultsObject, HookResultsObject, HookInitialObject } from '@interfaces/Search'
import { sourcegraphSearch } from '@lib/api/search'
import { useState, useEffect } from 'react'

const useInteractiveSearch = ({ initialSearchURL = '', initialQuery = '', initialPatternType = '' }: HookInitialObject): HookResultsObject  => {
    const [query, setQuery] = useState(initialQuery)
    const [url, setURL] = useState(initialSearchURL)
    const [patternType, setPatternType] = useState(initialPatternType)
    const [results, setResults] = useState<ResultsObject[] | null>(null)

    useEffect(() => {
        const results = async (): Promise<ResultsObject[] | null> => {
            const fetchedData = await sourcegraphSearch(url, query.trim(), patternType.trim())
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

    }, [url, query, patternType])
    
    return {
        results,
        query, 
        setQuery,
        url,
        setURL,
        patternType,
        setPatternType
    }
}

export default useInteractiveSearch
