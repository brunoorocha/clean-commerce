import PlaceOrder from "./PlaceOrder"
import PlaceOrderInput from "./dto/PlaceOrderInput"

describe("PlaceOrder UseCase", () => {
    test("Should place an order", () => {
        const input: PlaceOrderInput = {
            cpf: "02578969027",
            items: [
                { description: "Kindle", price: 349.0, quantity: 2 },
                { description: "Echo Dot", price: 399.0, quantity: 1 },
                { description: "Fire TV Stick", price: 449.0, quantity: 1 }
            ],
            coupon: "VALE20"
        }
        const placeOrder = new PlaceOrder()
        const output = placeOrder.execute(input)
        expect(output.total).toBe(1236.8)
    })

    test("Should place an order with an expired coupon", () => {
        const input: PlaceOrderInput = {
            cpf: "02578969027",
            items: [
                { description: "Kindle", price: 349.0, quantity: 2 },
                { description: "Echo Dot", price: 399.0, quantity: 1 },
                { description: "Fire TV Stick", price: 449.0, quantity: 1 }
            ],
            coupon: "VALE20_EXPIRED"
        }
        const placeOrder = new PlaceOrder()
        const output = placeOrder.execute(input)
        expect(output.total).toBe(1546.0)
    })
})