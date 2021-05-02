import {
    ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR, GET_PRODUCTS_START, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS,
    DELETE_PRODUCT_START, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR, GET_PRODUCT_EDIT, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_ERROR
} from "../types";

const initialState = {
    products: [],
    error: null,
    loading: false,
    deleteProduct: null,
    productEdit: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS_START:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: true
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case GET_PRODUCTS_ERROR:
        case ADD_PRODUCT_ERROR:
        case DELETE_PRODUCT_ERROR:
        case EDIT_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        case DELETE_PRODUCT_START:
            return {
                ...state,
                deleteProduct: action.payload
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== state.deleteProduct),
                deleteProduct: null
            }
        case GET_PRODUCT_EDIT:
            return {
                ...state,
                productEdit: action.payload
            }
        case EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                productEdit: null,
                products: state.products.map(product =>
                    product.id === action.payload.id ? product = action.payload : product
                )
            }
        default:
            return state;
    }
}