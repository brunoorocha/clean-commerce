import PlaceOrder from "../../src/application/place-order/PlaceOrder"
import PlaceOrderInput from "../../src/application/place-order/PlaceOrderInput"
import CouponRepositoryMemory from "../../src/infrastructure/repository/memory/CouponRepositoryMemory"
import ItemRepositoryMemory from "../../src/infrastructure/repository/memory/ItemRepositoryMemory"
import OrderRepositoryMemory from "../../src/infrastructure/repository/memory/OrderRepositoryMemory"
import ZipcodeCalculatorMemory from "../../src/infrastructure/gateway/memory/ZipcodeCalculatorMemory"

describe("PlaceOrder UseCase", () => {
    let itemRepository: ItemRepositoryMemory
    let couponRepository: CouponRepositoryMemory
    let orderRepository: OrderRepositoryMemory
    let zipcodeCalculator: ZipcodeCalculatorMemory

    beforeEach(() => {
        itemRepository = new ItemRepositoryMemory()
        couponRepository = new CouponRepositoryMemory()
        orderRepository = new OrderRepositoryMemory()
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
        const placeOrder = new PlaceOrder(itemRepository, couponRepository, orderRepository, zipcodeCalculator)
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
        const placeOrder = new PlaceOrder(itemRepository, couponRepository, orderRepository, zipcodeCalculator)
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
        const placeOrder = new PlaceOrder(itemRepository, couponRepository, orderRepository, zipcodeCalculator)
        const output = placeOrder.execute(input)
        expect(output.freight).toBe(310.0)
    })
})