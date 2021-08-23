import { ResultsObject, HookResultsObject } from '@interfaces/Search'
import { fetchResults } from '@lib/fetch'
import { useState, useEffect } from 'react'

const useInteractiveSearch = ({ initialQuery = '' }): HookResultsObject  => {
    const [query, setQuery] = useState(initialQuery)
    const [results, setResults] = useState<ResultsObject[] | undefined>([])

    useEffect(() => {
        const results = async (): Promise<ResultsObject[] | undefined> => {
            const fetchedData = await fetchResults(query.trim())
            return fetchedData
        }
        results()
        .then(results => {
            setResults(results)
        })
        .catch(error => {
            throw error
        })

    }, [query])
    
    return {
        results,
        query, 
        setQuery,
    }
}

export default useInteractiveSearch
