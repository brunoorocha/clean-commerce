type PlaceOrderInputItem = {
    id: string,
    quantity: number
}

type PlaceOrderInput = {
    cpf: string,
    zipcode: string,
    items: PlaceOrderInputItem[],
    coupon: string
}

export default PlaceOrderInput