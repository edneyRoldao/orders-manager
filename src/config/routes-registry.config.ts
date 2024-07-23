import { Express } from 'express-serve-static-core'
import { ProductController } from '../controllers/product-controller'

export class RoutesRegistryConfig {

    private productController: ProductController

    constructor(private readonly app: Express) {
        this.productController = new ProductController()
    }

    register() {
        this.app.get('/api/products', this.productController.getProducts)
        this.app.get('/api/products/:code', this.productController.getProductByCode)
        this.app.put('/api/products/:code', this.productController.updateProduct)
        this.app.patch('/api/products/:code/active', this.productController.activeProduct)
        this.app.patch('/api/products/:code/deactivate', this.productController.deactivateProduct)
        this.app.post('/api/products', this.productController.createProduct)
        this.app.delete('/api/products/:code', this.productController.deleteProductByCode)
    }

}
