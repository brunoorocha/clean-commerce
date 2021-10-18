import OrderRepository from "./OrderRepository";
import Order from "../models/Order";

export default class OrderRepositoryMemory implements OrderRepository {
    private orders: Order[] = []

    store(order: Order): void {
        this.orders.push(order)
    }
}