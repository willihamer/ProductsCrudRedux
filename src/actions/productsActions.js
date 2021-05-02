import Swal from "sweetalert2";
import axiosClient from "../config/axios";
import {
    ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR, GET_PRODUCTS_START, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS,
    DELETE_PRODUCT_START, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR, GET_PRODUCT_EDIT, EDIT_PRODUCT_START, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_ERROR
} from "../types";

// create new products
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch(addProduct());
        try {
            await axiosClient.post('/products', product);
            dispatch(addProductSuccess(product));
            Swal.fire(
                'Good News',
                'The product was added correctly',
                'success'
            );
        } catch (error) {
            dispatch(addProductError(true));
            Swal.fire(
                'Bad News',
                'The product was not added correctly',
                'error'
            );
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
});

// GET PRODUCTS FUNCTION
export function getProductsAction() {
    return async (dispatch) => {
        dispatch(getProducts());

        try {
            const answer = await axiosClient.get('/products');
            dispatch(getProductsSuccess(answer.data));
        } catch (error) {
            dispatch(getProductsError());
        }
    }
}

const getProducts = () => ({
    type: GET_PRODUCTS_START,
    payload: true
});

const getProductsSuccess = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products
})

const getProductsError = () => ({
    type: GET_PRODUCTS_ERROR,
    payload: true
})


// SELECT AND DELETE PRODUCT
export function deleteProductAction(id) {
    return async (dispatch) => {
        dispatch(getProductDelete(id));

        try {
            await axiosClient.delete(`/products/${id}`);
            dispatch(deleteProductSuccess());
            Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
            )
        } catch (error) {
            dispatch(deleteProductError());
        }
    }
}

const getProductDelete = (id) => ({
    type: DELETE_PRODUCT_START,
    payload: id
})

const deleteProductSuccess = () => ({
    type: DELETE_PRODUCT_SUCCESS,
})

const deleteProductError = () => ({
    type: DELETE_PRODUCT_ERROR,
    payload: true
});

export function getProductEditAction(product) {
    return (dispatch) => {
        dispatch(getProductEdit(product));
    }
}

const getProductEdit = (product) => ({
    type: GET_PRODUCT_EDIT,
    payload: product
});

export function editProductAction(product) {
    return async (dispatch) => {
        dispatch(editProduct());
        try {
            await axiosClient.put(`/products/${product.id}`, product);
            dispatch(editProductSuccess(product));
        } catch (error) {
            dispatch(editProductError());
        }
    }
}

const editProduct = () => ({
    type: EDIT_PRODUCT_START
});

const editProductSuccess = product => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: product
});

const editProductError = () => ({
    type: EDIT_PRODUCT_ERROR,
    payload: true
})


