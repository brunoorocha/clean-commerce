import Order from "./Order"
import Customer from "./Customer"
import CPF from "./CPF"
import OrderItem from "./OrderItem"
import Product from "./product"

describe("Order Model", () => {
    let customer: Customer
    let product: Product

    beforeEach(() => {
        customer = new Customer(1, "John Doe", CPF.create("02578969027"))
        product = new Product('Kindle', 349.0)
    })

    test("Should add an item", () => {
        const order = new Order(customer, [])
        order.addItem({ id: 1, product, quantity: 2 })
        expect(order.getItems().length).toBe(1)
    })

    test("Should increment total correctly", () => {
        const order = new Order(customer, [])
        order.addItem({ id: 1, product, quantity: 2 })
        expect(order.getTotal()).toBe(698.0)
    })

    test("Should apply coupon discount correctly", () => {
        const order = new Order(customer, [])
        order.addItem({ id: 1, product, quantity: 2 })
        order.addCoupon({ code: "VALE20", percentage: 20 })
        expect(order.getTotal()).toBe(558.4)
    })
})