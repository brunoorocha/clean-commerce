import Order from "../models/Order"
import Customer from "../models/Customer"
import CPF from "../models/CPF"
import Product from "../models/Product"
import Coupon from "../models/Coupon"
import PlaceOrderInput from "./dto/PlaceOrderInput"
import PlaceOrderOutput from "./dto/PlaceOrderOutput"

export default class PlaceOrder {
    private coupons: Coupon[]

    constructor (
        private orders: Order[] = []
    ) {
        this.coupons = [
            { code: "VALE20", percentage: 20 }
        ]
    }

    execute (input: PlaceOrderInput): PlaceOrderOutput {
        const customer = new Customer(1, "John Doe", CPF.create(input.cpf))
        const order = new Order(customer)
        input.items.forEach(item => {
            const product = new Product(item.description, item.price)
            order.addItem({ id: 1, product, quantity: item.quantity })
        })
        if (input.coupon) {
            const coupon = this.coupons.find(coupon => coupon.code === input.coupon)
            if (coupon) {
                order.addCoupon(coupon)
            }
        }
        this.orders.push(order)
        const total = order.getTotal()
        return { total }
    }
}