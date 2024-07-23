export class Product {

    constructor(private code: string, 
                private name: string, 
                private value: number, 
                private stock: number, 
                private active: boolean = true) {}

    getCode() {
        return this.code
    }

    setActive(active: boolean) {
        this.active = active
    }

    setName(name: string) {
        this.name = name
    }

    setValue(value: number) {
        this.value = value
    }

    setStock(stock: number) {
        this.stock = stock
    }

    static createProduct(body: any): Product {
        // tratamento do body
        if (!body.value || body.value == 0 || typeof body.value === 'string') {
            throw new Error('product value is invalid')
        }

        const product = new Product(body.code, body.name, body.value, body.stock, body.active)
        return product
    }

    updateProduct(body: any): void {
        this.setName(body.name)
        this.setValue(body.value)
        this.setStock(body.stock)
    }

}
