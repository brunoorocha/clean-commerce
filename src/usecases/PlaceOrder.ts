import Order from "../models/Order"
import Customer from "../models/Customer"
import CPF from "../models/CPF"
import Coupon from "../models/Coupon"
import PlaceOrderInput from "./dto/PlaceOrderInput"
import PlaceOrderOutput from "./dto/PlaceOrderOutput"
import Item from "../models/Item"

export default class PlaceOrder {
    private coupons: Coupon[]
    private items: Item[]

    constructor (
        private orders: Order[] = []
    ) {
        this.coupons = [
            new Coupon("VALE20", 20, new Date("2021-12-12")),
            new Coupon("VALE20_EXPIRED", 20, new Date("2020-12-12"))
        ]

        this.items = [
            new Item("1", "Guitarra", 1000, 100, 50, 15, 3),
            new Item("2", "Amplificador", 5000, 50, 50, 50, 22),
            new Item("3", "Cabo", 30, 10, 10, 10, 1)
        ]
    }

    execute (input: PlaceOrderInput): PlaceOrderOutput {
        const customer = new Customer(1, "John Doe", CPF.create(input.cpf))
        const order = new Order(customer)
        input.items.forEach(orderItem => {
            const item = this.items.find(item => item.id === orderItem.id)
            if (!item) throw new Error("Item not found")
            order.addItem(orderItem.id, item.price, orderItem.quantity)
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