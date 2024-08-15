import { Order } from '../../models/order'
import { OrderRepository } from '../order.repository'
import { Repository } from '../repository'
import queries from '../../../files/queries/orders-queries.json'
import { OrderItem } from '../../models/order-item'

export class OrderRepositoryImpl extends Repository implements OrderRepository {

    async create(order: Order): Promise<Order> {
        await this.datasource.query(queries.create, order.code, order.customerId)
        return await this.getByCode(order.code)
    }

    async getByCode(code: string): Promise<Order> {
        const data = await this.datasource.query(queries.getByCodeFull, code)
        const resultSet = data[0] as any[]

        const items: OrderItem[] = resultSet.map(item => {
            return {
                productId: item['product_id'],
                orderId: item['order_id'],
                quantity: item['quantity'],
                discountPercent: item['discount_percent'],
                total: item['value']
            }
        })

        const order: Order = {
            id: resultSet[0]['order_id'],
            code: resultSet[0]['order_code'],
            customerId: resultSet[0]['customer'],
            created: resultSet[0]['created'],
            status: resultSet[0]['status'],
            statusPayment: resultSet[0]['status_payment'],
            total: resultSet.reduce((a, c) => a + parseFloat(c['total']), 0),
            items
        }

        return order    
    }

    async createOrderItem(item: OrderItem): Promise<void> {
        await this.datasource.query(queries.createOrderItem, item.productId, item.orderId, item.quantity, item.discountPercent, item.total)
    }

    async createOrderItemBatch(items: OrderItem[]): Promise<void> {
        for (const item of items) {
            await this.createOrderItem(item)
        }
    }

}