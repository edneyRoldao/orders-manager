import { Request, Response } from 'express'
import { Product } from '../models/product'
import { ProductRepository } from '../repositories/product.repository'
import { DatasourceConfig } from '../config/datasource.config'

let products: Product[] = [
    new Product("123456", "note HP", 12000, 10, true),
    new Product("234567", "note Dell", 15000, 5, true),
    new Product("345678", "note Lenovo", 13000, 8, false),
    new Product("456789", "note Asus", 14000, 12, true),
    new Product("567890", "note Acer", 11000, 20, false),
    new Product("678901", "note Apple", 20000, 7, true),
    new Product("789012", "note Samsung", 12500, 15, true),
    new Product("890123", "note MSI", 13500, 9, false),
    new Product("901234", "note Toshiba", 10000, 6),
    new Product("012345", "note Sony", 16000, 4, false)
]

const datasource = new DatasourceConfig()
const productRepository = new ProductRepository(datasource)

export class ProductController {

    async getProducts(req: Request, res: Response) {
        const products = await productRepository.getProducts()
        return res.status(200).json(products)    
    }

    getProductByCode(req: Request, res: Response) {
        const product = getProduct(req)

        if (!!product)
            return res.status(200).json(product)
        
        return res.status(404).json({ message: 'product not found'})
    }

    activeProduct(req: Request, res: Response) {
        const product = getProduct(req)

        if (!!product) {
            product.setActive(true)
            return res.status(204).json()
        }
        
        return res.status(404).json({ message: 'product not found'})
    }

    deactivateProduct(req: Request, res: Response) {
        const product = getProduct(req)

        if (!!product) {
            product.setActive(false)
            return res.status(204).json()
        }
        
        return res.status(404).json({ message: 'product not found'})
    }

    createProduct(req: Request, res: Response) {
        try {
            const product = Product.createProduct(req.body)
            products.push(product)
            return res.status(201).json()
            
        } catch (error: any) {
            return res.status(400).json({ message: error.message})
        }
    }

    updateProduct(req: Request, res: Response) {
        const product = getProduct(req)

        if (!!product) {
            product.updateProduct(req.body)
            return res.status(204).json()
        }

        return res.status(404).json({ message: 'product not found'})
    }

    deleteProductByCode(req: Request, res: Response) {
        const product = getProduct(req)

        if (!!product) {
            products = products.filter(item => item.getCode() !== product.getCode())
            return res.status(204).json()
        }
        
        return res.status(404).json({ message: 'product not found'})
    }

}

function getProduct(req: Request): any {
    const productCode = req.params.code
    return products.find(item => item.getCode() === productCode)
}
