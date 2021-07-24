import Validable from './validable'

export default class RequiredLengthValidator implements Validable<string> {
    constructor(private readonly requiredLenght: number) {}

    isValid(value: string): boolean {
        return value.length == this.requiredLenght
    }
}