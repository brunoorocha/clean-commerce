import RequiredLenghtValidator from './validators/required-length-validator'
import NumbersOnlyValidator from './validators/numbers-only-validator'
import { removeSpecialCharacters } from './utility'

const CPF_REQUIRED_LENGTH = 11

export default class CPF {
    private constructor (private readonly value: string) {}

    public static create (value: string): CPF {
        const cleanValue = removeSpecialCharacters(value)

        const numbersOnlyValidator = new NumbersOnlyValidator()
        if (!numbersOnlyValidator.isValid(cleanValue)) {
            throw new Error('A CPF must have numbers only')
        }

        const lenghtValidator = new RequiredLenghtValidator(CPF_REQUIRED_LENGTH)
        if (!lenghtValidator.isValid(cleanValue)) {
            throw new RangeError(`A CPF should have exactly 11 digits.`)
        }

        return new CPF(cleanValue)
    }
}