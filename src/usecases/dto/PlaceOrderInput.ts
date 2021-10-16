type PlaceOrderInputItem = {
    description: string,
    price: number,
    quantity: number
}

type PlaceOrderInput = {
    cpf: string,
    items: PlaceOrderInputItem[],
    coupon: string
}

export default PlaceOrderInput