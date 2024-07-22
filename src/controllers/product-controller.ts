import { Request, Response } from 'express'
import { Product } from '../models/product'

// fake (mock)
const products: Product[] = [
    { "code": "abc124", "name": "note HP", "value": 12000, "stock": 10 },
    { "code": "abc125", "name": "note Dell", "value": 11000, "stock": 8 },
    { "code": "abc126", "name": "note Lenovo", "value": 11500, "stock": 12 },
    { "code": "abc127", "name": "note Asus", "value": 13000, "stock": 7 },
    { "code": "abc128", "name": "note Acer", "value": 9000, "stock": 15 },
    { "code": "abc129", "name": "note Samsung", "value": 14000, "stock": 6 },
    { "code": "abc130", "name": "note Toshiba", "value": 10000, "stock": 20 },
    { "code": "abc131", "name": "note Sony", "value": 15000, "stock": 5 },
    { "code": "abc132", "name": "note Apple", "value": 20000, "stock": 4 },
    { "code": "abc133", "name": "note Microsoft", "value": 18000, "stock": 9 }
]

export class ProductController {

    getProducts(req: Request, res: Response) {
        return res.status(200).json(products)    
    }

}