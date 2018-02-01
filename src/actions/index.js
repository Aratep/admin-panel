import {
    ALL_PRODUCTS,
    ADD_NEW_PRODUCT,
    REMOVE_PRODUCT,
    SINGLE_PRODUCT,
    ADD_VARIANT_FORM,
    REMOVE_VARIANT_FORM,
    ALL_USERS,
    USER_PRODUCTS
} from '../constants/constants';

let nextProdId = 0;
let nextFormId = 0;

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

export function addVariantForm(node) {
    return {
        type: ADD_VARIANT_FORM,
        id: nextFormId++,
        node
    }
}

export function removeVariantForm(id) {
    return {
        type: REMOVE_VARIANT_FORM,
        id
    }
}

export const allUsers = (users, count) => {
    return {
        type: ALL_USERS,
        users,
        count
    }
};

export const userProducts = (userProducts) => {
    return {
        type: USER_PRODUCTS,
        userProducts
    }
};