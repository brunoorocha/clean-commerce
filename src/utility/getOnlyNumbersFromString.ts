
export const getOnlyNumbersFromString = (text: string): string => {
    return text.replace(/\D/g, '')
}