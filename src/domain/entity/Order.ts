import OrderItem from "./OrderItem"
import Customer from "./Customer"
import Coupon from "./Coupon"

export default class Order {
    freight: number

    constructor (
        private customer: Customer,
        private items: OrderItem[] = [],
        private coupon?: Coupon
    ) {
        this.freight = 0
    }

    getCustomer (): Customer {
        return this.customer
    }

    getItems (): OrderItem[] {
        return this.items
    }

    addItem (id: string, price: number, quantity: number) {
        this.items.push({
            id: id,
            price: price,
            quantity: quantity
        })
    }

    removeItem (item: OrderItem) {
        this.items = this.items.filter(i => i.id != item.id)
    }

    getTotal (): number {
        let total = this.items.reduce((total, item) => {
            return total + item.price * item.quantity
        }, 0)
        if (this.coupon) {
            total -= (total * this.coupon.percentage) / 100
        }
        total += this.freight
        return total
    }

    addCoupon (coupon: Coupon) {
        if (coupon.isExpired()) { return }
        this.coupon = coupon
    }
}