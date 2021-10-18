import ZipcodeCalculatorMemory from "./ZipcodeCalculatorMemory"

describe("Zipcode Domain Service", () => {
    test("Should calculate the distance between zipcodes", () => {
        const zipcodeCalculator = new ZipcodeCalculatorMemory()
        const distance = zipcodeCalculator.calculate("11.111-11", "99.999-99")
        expect(distance).toBe(1000)
    })
})