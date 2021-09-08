import { RequestHandler, Application } from 'express'

const tryRoute = async (handler: RequestHandler): Promise<Application> => {
    try {
        return await tryRoute(handler)
    }
    catch(error: unknown) {
        console.error(error)
        throw new Error('Failed to handle route')
    }
}

export default tryRoute
