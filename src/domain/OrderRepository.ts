import Order from "./models/Order";

export default interface OrderRepository {
    store (order: Order): void
}