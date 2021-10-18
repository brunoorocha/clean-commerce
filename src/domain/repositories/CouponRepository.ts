import Coupon from "../models/Coupon";

export default interface CouponRepository {
    getCoupons (): Coupon[]
    getCouponWithCode(code: string): Coupon
}