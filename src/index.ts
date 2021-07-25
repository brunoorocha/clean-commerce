import CPF from './models/CPF'
import Product from './models/Product'
import Customer from './models/Customer'
import Order from './models/Order'

const simulateOrder = () => {
    try {
        const customer = new Customer(1, 'John Doe', CPF.create('02578969027'))
        const product1 = new Product('Kindle', 349.0)
        const product2 = new Product('Echo Dot', 399.0)
        const product3 = new Product('Fire TV Stick', 449.0)
        const order = new Order(customer)
        order.addItem({ id: 1, product: product1, quantity: 3 })
        order.addItem({ id: 2, product: product2, quantity: 2 })
        order.addItem({ id: 3, product: product3, quantity: 1 })

        const orderResume = {
            customer: order.getCustomer().name, 
            total: order.getTotal()
        }
        console.table([orderResume])
    } catch (error) {
        console.log(`[error]: ${error}\n`)
    }
}

simulateOrder()