import CPF from './CPF'

export default class Customer {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly cpf: CPF
    ) {}
}