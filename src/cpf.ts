import RequiredLenghtValidator from './validators/required-length-validator'
import NumbersOnlyValidator from './validators/numbers-only-validator'
import AllCharactersAreTheSameValidator from './validators/AllCharactersAreTheSameValidator'
import { removeSpecialCharacters } from './utility'

const CPF_REQUIRED_LENGTH = 11

export default class CPF {
    private constructor (private readonly value: string) {}

    public static create (value: string): CPF {
        const cleanValue = removeSpecialCharacters(value)
        const numbersOnlyValidator = new NumbersOnlyValidator()
        const lenghtValidator = new RequiredLenghtValidator(CPF_REQUIRED_LENGTH)
        const sameCharacterValidator = new AllCharactersAreTheSameValidator()

        if (!numbersOnlyValidator.isValid(cleanValue)) {
            throw new Error('A CPF must have numbers only')
        }

        if (!lenghtValidator.isValid(cleanValue)) {
            throw new RangeError('A CPF should have exactly 11 digits.')
        }

        if (sameCharacterValidator.isValid(cleanValue)) {
            throw new Error('This CPF is not valid')
        }

        return new CPF(cleanValue)
    }
}