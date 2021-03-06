import Order from "../../domain/entity/Order"
import Customer from "../../domain/entity/Customer"
import CPF from "../../domain/entity/CPF"
import PlaceOrderInput from "./PlaceOrderInput"
import PlaceOrderOutput from "./PlaceOrderOutput"
import FreightCalculator from "../../domain/service/FreightCalculator"
import ZipcodeCalculator from "../../domain/gateway/ZipcodeCalculator"
import CouponRepository from "../../domain/repository/CouponRepository"
import ItemRepository from "../../domain/repository/ItemRepository"
import OrderRepository from "../../domain/repository/OrderRepository"

export default class PlaceOrder {
    constructor (
        private itemRepository: ItemRepository,
        private couponRepository: CouponRepository,
        private orderRepository: OrderRepository,
        private zipcodeCalculator: ZipcodeCalculator
    ) {}

    execute (input: PlaceOrderInput): PlaceOrderOutput {
        const customer = new Customer(1, "John Doe", CPF.create(input.cpf))
        const order = new Order(customer)
        this.addOrderItems(input, order)
        this.addCouponIfExists(input, order)
        this.orderRepository.store(order)
        return { 
            total: order.getTotal(), 
            freight: order.freight
        }
    }

    private addCouponIfExists (input: PlaceOrderInput, order: Order) {
        if (!input.coupon) { return }
        const coupon = this.couponRepository.getCouponWithCode(input.coupon)
        if (!coupon) { return }
        order.addCoupon(coupon)
    }

    private addOrderItems (input: PlaceOrderInput, order: Order) {
        const distance = this.zipcodeCalculator.calculate(input.zipcode, "99.999-99")
        input.items.forEach(orderItem => {
            const item = this.itemRepository.getItemWithId(orderItem.id)
            if (!item) { throw new Error(`No item found for id ${orderItem.id}`) }
            order.addItem(orderItem.id, item.price, orderItem.quantity)
            order.freight += FreightCalculator.calculate(distance, item) * orderItem.quantity
        })
    }
}