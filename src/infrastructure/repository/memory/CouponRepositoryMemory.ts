import CouponRepository from "../../../domain/repository/CouponRepository"
import Coupon from "../../../domain/entity/Coupon"

export default class CouponRepositoryMemory implements CouponRepository {    
    constructor (
        private coupons = [
            new Coupon("VALE20", 20, new Date("2021-12-12")),
            new Coupon("VALE20_EXPIRED", 20, new Date("2020-12-12"))
        ]
    ) {}

    getCoupons(): Coupon[] {
        return this.coupons
    }

    getCouponWithCode(code: string): Coupon | undefined {
        return this.coupons.find(coupon => coupon.code === code)
    }
}