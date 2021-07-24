export const removeSpecialCharacters = (text: string): string => {
    const regex = RegExp(/[^A-Za-z0-9]/g)
    return text.replace(regex, '')
}