export default class Coupon {
    constructor (
        readonly code: string, 
        readonly percentage: number,
        readonly expireDate: Date,
        private readonly today = new Date()
    ) {}

    isExpired () {
        return (this.expireDate.getTime() < this.today.getTime())
    }
}
