import { Router, Handler } from 'express'

import { getSearch } from '../handlers/search'

export default async (router: Router): Promise<Handler> => 
    router.post('/search', async (request, response, next) => {
        try {
            return await getSearch(request, response, next)
        }
        catch(error: unknown) {
            console.error(error)
            throw new Error('Failed to handle route')
        }
    })

