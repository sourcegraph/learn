import { ResultsObject } from '@interfaces/Search'
import { fetchResults } from '@lib/api/fetch'

export const sourcegraphSearch = async (url: string, query: string): Promise<ResultsObject[] | null> => {
    const searchURL = new URL(url)
    if (query !== undefined) {
        searchURL.searchParams.set('query', query)
    }

    return fetchResults(searchURL.toString(), query)
}
