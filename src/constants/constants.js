export const tokenToVerify = localStorage.getItem('tokenToVerify');

export const POST = 'POST';
export const GET = 'GET';
export const PUT = 'PUT';
export const DELETE = 'DELETE';
export const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'x-access-token': {tokenToVerify},
};

export const CREATE_PRODUCT_URL = 'http://localhost:8080/products/create';
export const UPDATE_PRODUCT_URL = 'http://localhost:8080/products/update';
export const DELETE_PRODUCT_URL = 'http://localhost:8080/products/delete';
export const PRODUCTS_LIST_URL = 'http://localhost:8080/products/products-list';
// export const ADMIN_LOGIN_URL = 'http://localhost:8080/admin/login'; //http://localhost:8080/users/sign_in
export const ADMIN_LOGIN_URL = 'http://localhost:8080/users/sign_in';
export const ALL_USERS_URL = 'http://localhost:8080/users/all-users';
export const TOKEN_URL = 'http://localhost:8080/token';
export const GET_CART_LIST_URL = 'http://localhost:8080/products/cart-list';
export const ADD_NEW_VARIANT_URL = 'http://localhost:8080/products/add-new-variant';

export const ALL_PRODUCTS = 'ALL_PRODUCTS';
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const SINGLE_PRODUCT = 'SINGLE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const ALL_USERS = 'ALL_USERS';
export const USER_PRODUCTS = 'USER_PRODUCTS'; //USER_PRODUCTS

export const ADD_VARIANT_FORM = 'ADD_VARIANT_FORM';
export const REMOVE_VARIANT_FORM = 'REMOVE_VARIANT_FORM';

export const OPTIONS = {active: 'Active', inactive: 'Inactive'};
