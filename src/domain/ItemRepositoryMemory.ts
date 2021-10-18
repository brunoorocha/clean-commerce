import ItemRepository from "./ItemRepository";
import Item from "./models/Item";

export default class ItemRepositoryMemory implements ItemRepository {
    constructor (
        private items = [
            new Item("1", "Guitarra", 1000, 100, 50, 15, 3),
            new Item("2", "Amplificador", 5000, 50, 50, 50, 22),
            new Item("3", "Cabo", 30, 10, 10, 10, 1)
        ]
    ) {}

    getItemWithId(id: string): Item {
        const item = this.items.find(item => item.id === id)
        if (!item) { throw new Error(`No item found for id ${id}`) }
        return item
    }
}