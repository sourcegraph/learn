import http from 'http'
import * as path from 'path'

import cors from 'cors'
import express, { Express, Router, urlencoded, json } from 'express'

import getFiles from './util/getFiles'

const startServer = async (port: number): Promise<http.Server> => {
    const { ORIGIN_URL } = process.env
    const app: Express = express()
    const router: Router = Router()

    // CORS
    const corsOptions = {
        origin: `${ORIGIN_URL || 'http://localhost:3000'}`,
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
        preFlightContinue: true
    }
    router.use(cors(corsOptions))
    router.use(json())
    router.use(urlencoded(({ extended: true })))

    // Get routes
    
    // const files = await getFiles(path.join(process.cwd(), 'src/routes'))
    // router.use(files.map(file => file))
    
    const files = await getFiles(path.join(process.cwd(), 'src/routes'))
    files.map((file: string) => import(file).then(({ default: routes }) => routes(router)))
    
    app.use(router)
    // files.map(file => import(file).then((file: string) => app.use('/', file))

    // Start
    return app.listen(port, () => {
        console.log(`Application listening on port ${port}`)
    })
}

startServer(3001)
    .then()
    .catch(error => {
    console.error(error)
})
