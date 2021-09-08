import { ResultsObject } from '@interfaces/Search'
import { fetchResults } from '@lib/api/fetch'

const SEARCH = process.env.SEARCH_URL || 'http://localhost:3001/search'

export const sourcegraphSearch = async (query: string): Promise<ResultsObject[] | null> => {
    const url = new URL(SEARCH)
    if (query !== undefined) {
        url.searchParams.set('query', query)
    }

    return fetchResults(url.toString(), query)
}
