import { Inject } from '../../config/container.config'
import { OrderErrorDTO } from '../../dto/order-error.dto'
import { OrderRequest } from '../../dto/order-request.dto'
import { CustomerService } from '../../services/customer.service'
import { OrderValidator } from '../order.validator'

export class OrderValidatorCustomerImpl implements OrderValidator {

    @Inject('customerSvc') 
    private customerService!: CustomerService

    async validate(orderRequest: OrderRequest): Promise<OrderErrorDTO[]> {
        const errors = []

        try {
            await this.customerService.getByDocument(orderRequest.customerDocument)
        } catch (error: any) {
            errors.push({ title: 'customerDocument', message: error.message })
        }

        return errors
    }

}