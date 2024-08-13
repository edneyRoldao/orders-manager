import { OrderErrorDTO } from '../../dto/order-error.dto'
import { OrderRequest } from '../../dto/order-request.dto'
import { OrderValidator } from '../order.validator'

export class OrderValidatorStockImpl implements OrderValidator {

    async validate(orderRequest: OrderRequest): Promise<OrderErrorDTO[]> {
        return []
    }

}