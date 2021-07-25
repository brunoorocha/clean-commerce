import OrderItem from './OrderItem'
import Customer from './Customer'

export default class Order {
    constructor (
        private customer: Customer,
        private items: OrderItem[] = []
    ) {}

    getCustomer (): Customer {
        return this.customer
    }

    getItems (): OrderItem[] {
        return this.items
    }

    addItem (item: OrderItem) {
        this.items.push(item)
    }

    removeItem (item: OrderItem) {
        this.items = this.items.filter(i => i.id != item.id)
    }

    getTotal (): number {
        return this.items.reduce((total, item) => {
            return total + item.product.price * item.quantity
        }, 0)
    }
}