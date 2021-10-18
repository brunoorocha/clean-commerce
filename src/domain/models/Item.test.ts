import Item from "./Item"

describe("Item Model", () => {
    test("Should calculate item's volume", () => {
        const item = new Item("1", "Amplificador", 5000, 50, 50, 50, 22)
        const volume = item.getVolume()
        expect(volume).toBe(0.125)
    })

    test("Should calculate item's density", () => {
        const item = new Item("1", "Amplificador", 5000, 50, 50, 50, 22)
        const density = item.getDensity()
        expect(density).toBe(176)
    })
})