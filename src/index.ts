import CPF from './cpf'

const assertIfCPFIsValid = (cpf: string) => {
    try {
        CPF.create(cpf)
        console.log(`The CPF ${cpf} is valid.`)
    } catch {
        console.log(`The CPF ${cpf} is invalid.`)
    }
}

assertIfCPFIsValid("06662860352")      // valid
assertIfCPFIsValid("066.628.603-52")   // valid
assertIfCPFIsValid("066.628.602-52")   // invalid
assertIfCPFIsValid("066.628.602-51")   // invalid
assertIfCPFIsValid("00000000000")      // invalid
assertIfCPFIsValid("33333333333")      // invalid
assertIfCPFIsValid("12345678900")      // invalid
assertIfCPFIsValid("123.456.789-00")   // invalid
assertIfCPFIsValid("0000000000")       // invalid
assertIfCPFIsValid("")                 // invalid