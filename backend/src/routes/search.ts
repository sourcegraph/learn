import { Express, NextFunction, Response, Request, RequestHandler } from 'express'

import { getSearch } from '../handlers/search'
import tryRoute from '../util/tryRoute'

export default (server: Express): NextFunction | void => {
    server.post('/search', async (request: Request, response: Response, next: NextFunction): Promise<RequestHandler | void> => {
        await getSearch(request, response, next)
    })
}
