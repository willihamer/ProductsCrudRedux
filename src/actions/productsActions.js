import axiosClient from "../config/axios";
import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";

// create new products
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch(addProduct());
        try {
            await axiosClient.post('/products', product);
            dispatch(addProductSuccess(product));
        } catch (error) {
            dispatch(addProductError(true));
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
});

const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

const addProductError = (state) => ({
    type: ADD_PRODUCT_ERROR,
    payload: state,
})