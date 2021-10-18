import PlaceOrder from "./PlaceOrder"
import PlaceOrderInput from "./dto/PlaceOrderInput"

describe("PlaceOrder UseCase", () => {
    test("Should place an order", () => {
        const input: PlaceOrderInput = {
            cpf: "02578969027",
            items: [
                { id: "1", quantity: 2 },
                { id: "2", quantity: 1 },
                { id: "3", quantity: 3 },
            ],
            coupon: "VALE20"
        }
        const placeOrder = new PlaceOrder()
        const output = placeOrder.execute(input)
        expect(output.total).toBe(5672.0)
    })

    test("Should place an order with an expired coupon", () => {
        const input: PlaceOrderInput = {
            cpf: "02578969027",
            items: [
                { id: "1", quantity: 2 },
                { id: "2", quantity: 1 },
                { id: "3", quantity: 3 },
            ],
            coupon: "VALE20_EXPIRED"
        }
        const placeOrder = new PlaceOrder()
        const output = placeOrder.execute(input)
        expect(output.total).toBe(7090.0)
    })
})