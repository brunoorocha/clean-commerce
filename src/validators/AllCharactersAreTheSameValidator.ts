import Validable from './validable'

export default class AllCharactersAreTheSameValidator implements Validable<string> {
    isValid(value: string): boolean {
        const areAllTheSame = value.split('').reduce((accumulated, current) => {
            return accumulated && value[0] == current
        }, true)

        return areAllTheSame
    }
}