import RequiredLenghtValidator from '../validators/RequiredLengthValidator'
import NumbersOnlyValidator from '../validators/NumbersOnlyValidator'
import AllCharactersAreTheSameValidator from '../validators/AllCharactersAreTheSameValidator'
import { removeSpecialCharacters } from '../utility'

const CPF_LENGTH = 11
const CPF_VALIDATOR_DIGITS_INDEX = 9

export default class CPF {
    private constructor (private readonly value: string) {}

    public static create (value: string): CPF {
        const cleanValue = removeSpecialCharacters(value)
        const numbersOnlyValidator = new NumbersOnlyValidator()
        const lenghtValidator = new RequiredLenghtValidator(CPF_LENGTH)
        const sameCharacterValidator = new AllCharactersAreTheSameValidator()

        if (!numbersOnlyValidator.isValid(cleanValue)) {
            throw new Error('A CPF must have numbers only.')
        }

        if (!lenghtValidator.isValid(cleanValue)) {
            throw new RangeError('A CPF should have exactly 11 digits.')
        }

        if (sameCharacterValidator.isValid(cleanValue)) {
            throw new Error('This CPF is not valid.')
        }

        if (!this.isCPFValid(cleanValue)) {
            throw new Error('This CPF is not valid.')
        }

        return new CPF(cleanValue)
    }

    private static isCPFValid(cpf: string): boolean {
        const firstDigit = this.calculateDigit(cpf, CPF_LENGTH - 1)
        const secondDigit = this.calculateDigit(cpf, CPF_LENGTH)
        const validatorDigits = cpf.slice(CPF_VALIDATOR_DIGITS_INDEX)
        const calculatedValidatorDigits = `${firstDigit}${secondDigit}`
        return validatorDigits == calculatedValidatorDigits
    }

    private static calculateDigit = (cpf: string, factor: number): number => {
        const digits = [...cpf].map(digit => parseInt(digit))
        const total = digits.slice(0, (factor - 1)).reduce((accumulator, currentDigit, currentDigitIndex) => {
            return accumulator + currentDigit * (factor - currentDigitIndex)
        }, 0)
        const rest = total % CPF_LENGTH
        return rest < 2 ? 0 : CPF_LENGTH - rest
    }
}