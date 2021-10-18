import Order from "./models/Order";
import OrderRepository from "./OrderRepository";

export default class OrderRepositoryMemory implements OrderRepository {
    private orders: Order[] = []

    store(order: Order): void {
        this.orders.push(order)
    }
}