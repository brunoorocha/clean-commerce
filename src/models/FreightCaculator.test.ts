import FreightCalculator from "./FreightCalculator"
import Item from "./Item"

describe("Freight Calculator Model", () => {
    test("Should calculate an item's freight price", () => {
        const item = new Item("1", "Guitarra", 1000, 100, 50, 15, 3)
        const distance = 1000
        const price = FreightCalculator.calculate(distance, item)
        expect(price).toBe(30)
    })

    test("Should calculate an item's freight price", () => {
        const item = new Item("2", "Amplificador", 5000, 50, 50, 50, 22)
        const distance = 1000
        const price = FreightCalculator.calculate(distance, item)
        expect(price).toBe(220)
    })
})