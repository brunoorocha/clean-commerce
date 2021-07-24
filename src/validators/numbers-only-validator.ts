import Validable from './validable'

export default class NumbersOnlyValidator implements Validable<string> {
    isValid(value: string): boolean {
        const regex = new RegExp(/^[0-9]*$/)
        return regex.test(value)
    }
}