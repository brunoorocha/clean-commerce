import PlaceOrder from "./PlaceOrder"
import PlaceOrderInput from "./dto/PlaceOrderInput"
import CouponRepositoryMemory from "../domain/CouponRepositoryMemory"
import ZipcodeCalculatorMemory from "../domain/services/ZipcodeCalculatorMemory"

describe("PlaceOrder UseCase", () => {
    let couponRepository: CouponRepositoryMemory
    let zipcodeCalculator: ZipcodeCalculatorMemory

    beforeEach(() => {
        couponRepository = new CouponRepositoryMemory()
        zipcodeCalculator = new ZipcodeCalculatorMemory()
    })

    test("Should place an order", () => {
        const input: PlaceOrderInput = {
            cpf: "02578969027",
            zipcode: "11.111-11",
            items: [
                { id: "1", quantity: 2 },
                { id: "2", quantity: 1 },
                { id: "3", quantity: 3 },
            ],
            coupon: "VALE20"
        }
        const placeOrder = new PlaceOrder(couponRepository, zipcodeCalculator)
        const output = placeOrder.execute(input)
        expect(output.total).toBe(5982.0)
    })

    test("Should place an order with an expired coupon", () => {
        const input: PlaceOrderInput = {
            cpf: "02578969027",
            zipcode: "11.111-11",
            items: [
                { id: "1", quantity: 2 },
                { id: "2", quantity: 1 },
                { id: "3", quantity: 3 },
            ],
            coupon: "VALE20_EXPIRED"
        }
        const placeOrder = new PlaceOrder(couponRepository, zipcodeCalculator)
        const output = placeOrder.execute(input)
        expect(output.total).toBe(7400.0)
    })

    test("Should place an order with freight calculation", () => {
        const input: PlaceOrderInput = {
            cpf: "02578969027",
            zipcode: "11.111-11",
            items: [
                { id: "1", quantity: 2 },
                { id: "2", quantity: 1 },
                { id: "3", quantity: 3 },
            ],
            coupon: "VALE20_EXPIRED"
        }
        const placeOrder = new PlaceOrder(couponRepository, zipcodeCalculator)
        const output = placeOrder.execute(input)
        expect(output.freight).toBe(310.0)
    })
})