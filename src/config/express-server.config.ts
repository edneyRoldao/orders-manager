import bodyParser from 'body-parser'
import express from 'express'
import { Express } from 'express-serve-static-core'

export class ExpressServerConfig {
    private app: Express
    private readonly PORT = 3000

    constructor() {
        this.app = express()
    }

    basicConfig(): ExpressServerConfig {
        // config de json para texto e texto para json
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
        return this
    }

    routesRegistry(): ExpressServerConfig {
        //primeira rota
        this.app.get('/api/products', (request, response) => {
            console.log('a rota foi invocada', request.query.test);
            return response.status(200).json({ message: 'api funcionando corretamente'})
        })

        return this
    }

    startServer(): void {
        this.app.listen(this.PORT, () => {
            console.log('server is connected on port:', this.PORT)
        })
    }

}
