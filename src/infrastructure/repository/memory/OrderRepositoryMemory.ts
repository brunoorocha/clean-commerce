import OrderRepository from "../../../domain/repository/OrderRepository"
import Order from "../../../domain/entity/Order"

export default class OrderRepositoryMemory implements OrderRepository {
    private orders: Order[] = []

    store(order: Order): void {
        this.orders.push(order)
    }
}