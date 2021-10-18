import Order from "../domain/models/Order"
import Customer from "../domain/models/Customer"
import CPF from "../domain/models/CPF"
import Coupon from "../domain/models/Coupon"
import PlaceOrderInput from "./dto/PlaceOrderInput"
import PlaceOrderOutput from "./dto/PlaceOrderOutput"
import Item from "../domain/models/Item"
import FreightCalculator from "../domain/services/FreightCalculator"
import ZipcodeCalculator from "../domain/services/ZipcodeCalculator"
import ZipcodeCalculatorMemory from "../domain/services/ZipcodeCalculatorMemory"
import CouponRepository from "../domain/CouponRepository"

export default class PlaceOrder {
    private items: Item[]

    constructor (
        private couponRepository: CouponRepository,
        private zipcodeCalculator: ZipcodeCalculator,
        private orders: Order[] = []
    ) {
        this.couponRepository = couponRepository
        this.items = [
            new Item("1", "Guitarra", 1000, 100, 50, 15, 3),
            new Item("2", "Amplificador", 5000, 50, 50, 50, 22),
            new Item("3", "Cabo", 30, 10, 10, 10, 1)
        ]
        this.zipcodeCalculator = new ZipcodeCalculatorMemory()
    }

    execute (input: PlaceOrderInput): PlaceOrderOutput {
        const customer = new Customer(1, "John Doe", CPF.create(input.cpf))
        const order = new Order(customer)
        const distance = this.zipcodeCalculator.calculate(input.zipcode, "99.999-99")
        input.items.forEach(orderItem => {
            const item = this.items.find(item => item.id === orderItem.id)
            if (!item) throw new Error("Item not found")
            order.addItem(orderItem.id, item.price, orderItem.quantity)
            order.freight += FreightCalculator.calculate(distance, item) * orderItem.quantity
        })
        if (input.coupon) {
            const coupon = this.couponRepository.getCouponWithCode(input.coupon)
            if (coupon) {
                order.addCoupon(coupon)
            }
        }
        this.orders.push(order)
        const total = order.getTotal()
        const freight = order.freight
        return { total, freight }
    }
}