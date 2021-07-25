import CPF from './cpf'

const assertIfCPFIsValid = (cpf: string) => {
    try {
        CPF.create(cpf)
        console.log(`The CPF ${cpf} is valid.`)
    } catch (error) {
        console.log(`The CPF ${cpf} is invalid.`)
        console.log(`[error]: ${error}\n`)
    }
}

assertIfCPFIsValid("02578969027")      // valid
assertIfCPFIsValid("025.789.690-27")   // valid
assertIfCPFIsValid("025.789.691-27")   // invalid
assertIfCPFIsValid("025.789.690-272")  // invalid
assertIfCPFIsValid("00000000000")      // invalid
assertIfCPFIsValid("33333333333")      // invalid
assertIfCPFIsValid("12345678900")      // invalid
assertIfCPFIsValid("123.456.789-00")   // invalid
assertIfCPFIsValid("0000000000")       // invalid
assertIfCPFIsValid("025.789.690-2a")   // invalid
assertIfCPFIsValid("")                 // invalid