import RequiredLenghtValidator from './validators/required-length-validator'

const CPF_REQUIRED_LENGTH = 11

export default class CPF {
    private constructor (private readonly value: string) {}

    public static create (value: string): CPF {
        let lenghtValidator = new RequiredLenghtValidator(CPF_REQUIRED_LENGTH)
        if (!lenghtValidator.isValid(value)) {
            throw new RangeError(`A CPF should have exactly 11 characters, the value given has ${value.length}.`)
        }

        return new CPF(value)
    }
}