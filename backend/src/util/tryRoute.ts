import { Response, NextFunction, RequestHandler } from 'express'

interface RestifyHttpError {
    message: string
}

const tryRoute = async (request: RequestHandler, response: Response, next: NextFunction): Promise<RequestHandler | void> => {
    try {
        return await tryRoute(request, response, next)
    }
    catch(error: unknown) {
        console.error(error)
        const fetchError: RestifyHttpError = {
            message: 'Server error'
        }
        return next(fetchError)
    }
}

export default tryRoute
