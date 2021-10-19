export default class Item {
    constructor (
        readonly id: string,
        readonly description: string,
        readonly price: number,
        readonly width: number,
        readonly height: number,
        readonly lenght: number,
        readonly weight: number
    ) {}

    getVolume () {
        return (this.width / 100 * this.height / 100 * this.lenght / 100)
    }

    getDensity () {
        return this.weight / this.getVolume()
    }
}