import OrderItem from "./OrderItem"
import Customer from "./Customer"
import Coupon from "./Coupon"

export default class Order {
    constructor (
        private customer: Customer,
        private items: OrderItem[] = [],
        private coupon?: Coupon
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
        let total = this.items.reduce((total, item) => {
            return total + item.product.price * item.quantity
        }, 0)
        if (this.coupon) {
            total -= (total * this.coupon.percentage) / 100
        }
        return total
    }

    addCoupon (coupon: Coupon) {
        if (coupon.isExpired()) { return }
        this.coupon = coupon
    }
}