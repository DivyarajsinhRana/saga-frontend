import { get_products, set_products } from "./actionType"

export const getAllProducts = (payload) => {
    return (
        {
            type:get_products
        }
    )
}
export const setProducts = (payload) => {
    return (
        {
            type:set_products,
            payload:payload
        }
    )
}