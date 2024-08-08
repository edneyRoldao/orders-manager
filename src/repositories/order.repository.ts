import { Order } from '../models/order'
import { OrderItem } from '../models/order-item'

export interface OrderRepository {

    create(order: Order): Promise<string>
    getByCode(code: string): Promise<Order>
    createOrderItem(item: OrderItem): Promise<void>

}