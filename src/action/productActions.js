import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = () => async(dispatch) => {
    await fetch("/api/products")
    .then(response => response.json())
    .then((res) => {
        dispatch({
            type: FETCH_PRODUCTS,
            payload: res,
        });
    });
};