import { OrderItemRequest } from './order-item-request'

export type OrderRequest = {
    customerDocument: string
    itens: OrderItemRequest[]
}
