import { ResultsObject } from '@interfaces/Search'
import { fetchResults } from '@lib/api/fetch'

export const sourcegraphSearch = async (url: string, query: string): Promise<ResultsObject[] | null> => {
    const searchURL = new URL(url)
    if (query !== undefined) {
        const encodedQuery = encodeURIComponent(query)
        searchURL.search = `query=${encodedQuery}`
    }

    return fetchResults(searchURL.toString())
}
