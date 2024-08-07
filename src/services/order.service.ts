import { OrderRequest } from '../dto/order-request'

export interface OrderService {

    create(orderRequest: OrderRequest): Promise<string>

}
