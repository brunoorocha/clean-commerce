import Order from "../entity/Order"

export default interface OrderRepository {
    store (order: Order): void
}