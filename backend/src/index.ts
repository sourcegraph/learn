import * as http from 'http'
import * as path from 'path'

import { CorsOptions, CorsOptionsDelegate, CorsRequest } from 'cors'
import express, { Express, Router } from 'express'

declare function Cors<T extends CorsRequest = CorsRequest>(
    options?: CorsOptions | CorsOptionsDelegate<T>,
): (
    request: T,
    response: {
        statusCode?: number | undefined;
        setHeader(key: string, value: string): void;
        end(): any;
    },
    next: (error?: unknown) => void,
) => void;

const startServer = async (port: number): Promise<Express> => {
    const app: Express = express()
    const router: Router = Router()
    const ORIGIN_URL = 'http://localhost:3000'
    const usePort = process.env.PORT || port

    // CORS
    const corsOptions = {
        origin: `${ORIGIN_URL}`,
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
        preFlightContinue: true
    }
    // app.use(cors(corsOptions))

    // Get routes
    
    const files = path.join(process.cwd(), 'routes')
    router.use(files)
    app.use(router)
    // files.map(file => import(file).then((file: string) => app.use('/', file))

    // Start
    return app
}

startServer(3001)
    .then(() => {
        console.log('Listening on port 3001')
    }).catch(error => {
    console.error(error);
    process.exit(1);
})
