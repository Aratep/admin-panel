import {ALL_PRODUCTS, ADD_NEW_PRODUCT, REMOVE_PRODUCT, SINGLE_PRODUCT} from '../constants/constants';

let nextProdId = 0;
export const addProduct = product => {
    return {
        type: ADD_NEW_PRODUCT,
        id: nextProdId++,
        product
    }
}

export const allProducts = (products, count) => {
    return {
        type: ALL_PRODUCTS,
        products,
        count
    }
};

export const singleProduct = (product) => {
    return {
        type: SINGLE_PRODUCT,
        product
    }
};

export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        id
    }
}
