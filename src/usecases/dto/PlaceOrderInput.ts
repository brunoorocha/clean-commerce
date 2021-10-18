type PlaceOrderInputItem = {
    id: string,
    quantity: number
}

type PlaceOrderInput = {
    cpf: string,
    items: PlaceOrderInputItem[],
    coupon: string
}

export default PlaceOrderInput