import CPF from './cpf'

try {
    const cpf = CPF.create('0000000000')
    console.log(cpf)
} catch (error) {
    console.error(error)
}