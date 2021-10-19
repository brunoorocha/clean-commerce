import Coupon from "../entity/Coupon"

export default interface CouponRepository {
    getCoupons (): Coupon[]
    getCouponWithCode(code: string): Coupon | undefined
}