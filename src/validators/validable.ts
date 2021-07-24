export default interface Validable<T> {
    isValid(value: T): boolean
}