import Product from './product'

type OrderItem = {
    readonly id: number
    readonly product: Product
    quantity: number
}

export default OrderItem