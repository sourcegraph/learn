import { Router, Handler } from 'express'

import { getSearch } from '../handlers/search'

export default (router: Router): Handler | void => 
    router.post('/search', (request, response, next) => {
        getSearch(request, response, next)
        .then(results => {
            response.status(200).send(results)
            next()
        })
        .catch(next)
    })
