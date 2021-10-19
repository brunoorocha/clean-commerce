import ZipcodeCalculator from "../../../domain/gateway/ZipcodeCalculator"

export default class ZipcodeCalculatorMemory implements ZipcodeCalculator {
    calculate(zipcodeA: string, zipcodeB: string): number {
        return 1000
    }
}