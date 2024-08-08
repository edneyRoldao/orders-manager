import { Inject } from '../../config/container.config'
import { OrderRequest } from '../../dto/order-request'
import { Order } from '../../models/order'
import { OrderItem } from '../../models/order-item'
import { OrderRepository } from '../../repositories/order.repository'
import { AppUtils } from '../../utils/app.utils'
import { CustomerService } from '../customer.service'
import { OrderService } from '../order.service'
import { ProductService } from '../product.service'

export class OrderServiceImpl implements OrderService {

    @Inject('orderRepo') private repository!: OrderRepository
    @Inject('productSvc') private productService!: ProductService
    @Inject('customerSvc') private customerService!: CustomerService

    async create(orderRequest: OrderRequest): Promise<string> {
        // todo -> recuperar o customer
        const customer = await this.customerService.getByDocument(orderRequest.customerDocument)

        // todo -> validar se customer existe
        if (!customer) throw new Error('Customer not found')

        // todo -> recuperar a lista de produtos
        const productsCode = orderRequest.items.map(item => item.productCode)
        const products = await this.productService.getProductsByCodeIn(productsCode)

        // todo -> validar os produtos
        if (orderRequest.items.length != products.length) throw new Error('The products found did not match from request')
        
        const order: Order = {
            customerId: customer.id,
            code: AppUtils.genereteUUISimple()
        }

        // todo -> criar a order
        const orderCode = await this.repository.create(order)

        // todo -> salvar os itens na tabela a products_orders
        

        return ''
    }

}