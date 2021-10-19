import CPF from "../../src/domain/entity/CPF"

describe("CPF Model", () => {
    test("Should not accept an empty CPF", () => {
        expect(() => CPF.create("")).toThrow(new RangeError("A CPF should have exactly 11 digits."))
    })

    test("Should not accept a CPF with letters", () => {
        expect(() => CPF.create("123abc45678")).toThrow(new Error("A CPF must have numbers only."))
    })

    test("Should not accept a CPF with less than 11 digits", () => {
        expect(() => CPF.create("123.456.789-0")).toThrow(new RangeError("A CPF should have exactly 11 digits."))
    })

    test("Should not accept a CPF with only the same digit", () => {
        expect(() => CPF.create("111.111.111-11")).toThrow(new Error('This CPF is not valid.'))
    })

    test("Should not accept a CPF that breaks CPF validation rules", () => {
        expect(() => CPF.create("123.456.789-00")).toThrow(new Error('This CPF is not valid.'))
    })

    test("Should accept a valid CPF without CPF mask", () => {
        expect(() => CPF.create("02578969027")).not.toThrowError()
    })

    test("Should accept a valid CPF with CPF mask", () => {
        expect(() => CPF.create("025.789.690-27")).not.toThrowError()
    })
})