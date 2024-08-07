import { Order } from '../models/order'

export interface OrderRepository {

    create(order: Order): Promise<string>

}