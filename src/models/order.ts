import { OrderItem } from './order-item'

export type Order = {
    id?: number
    code: string
    customerId: number
    created?: string
    status?: 'CANCELLED' | 'AWATING_PAYMENT' | 'FINISHED'
    statusPayment?: 'NOT_PAID' | 'PAID'
    paymentMethod?: 'CASH' | 'CREDIT' | 'PIX' | 'DEBIT'
    items?: OrderItem[]
}
