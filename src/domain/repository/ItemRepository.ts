import Item from "../entity/Item"

export default interface ItemRepository {
    getItemWithId(id: string): Item | undefined
}