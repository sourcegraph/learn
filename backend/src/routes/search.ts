import { Router, Handler } from 'express'

import { getSearch } from '../handlers/search'
import tryRoute from '../util/tryRoute'

export default async (router: Router): Promise<Handler> => router.post('/search', getSearch)
