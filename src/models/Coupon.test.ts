import Coupon from "./Coupon"

describe("Coupon Model", () => {
    test("Should be expired when expire date has passed", () => {
        const coupon = new Coupon("VALE20", 20, new Date("2020-10-10"))
        expect(coupon.isExpired()).toBeTruthy()
    })

    test("Should not be expired when expire date is today", () => {
        const coupon = new Coupon("VALE20", 20, new Date())
        expect(coupon.isExpired()).toBeFalsy()
    })
})