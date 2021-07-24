import CPF from './cpf'

const assertIfCPFIsValid = (cpf: string) => {
    try {
        CPF.create(cpf)
        console.log(`The CPF ${cpf} is valid.`)
    } catch {
        console.log(`The CPF ${cpf} is invalid.`)
    }
}

assertIfCPFIsValid("00000000000")      // invalid
assertIfCPFIsValid("33333333333")      // invalid
assertIfCPFIsValid("12345678900")      // valid
assertIfCPFIsValid("123.456.789-00")   // valid
assertIfCPFIsValid("0000000000")       // invalid
assertIfCPFIsValid("")                 // invalid