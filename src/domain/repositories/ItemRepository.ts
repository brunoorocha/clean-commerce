import Item from "../models/Item";

export default interface ItemRepository {
    getItemWithId(id: string): Item
}