import {
    GET,
    ALL_USERS_URL,
    tokenToVerify,
} from '../constants/constants';


export const getAllUsers = () => {
    return fetch(ALL_USERS_URL, {
        method: GET,
        headers: {'x-access-token': tokenToVerify}
    })
}

// export const createProduct = (body) => {
//     return fetch(CREATE_PRODUCT_URL, {
//         method: POST,
//         headers: HEADERS,
//         body: body
//     })
// };
//
// export const deleteProduct = (body) => {
//     return fetch(DELETE_PRODUCT_URL, {
//         method: DELETE,
//         headers: HEADERS,
//         body: body
//     })
// };
//
// export const adminLogin = (body) => {
//     return fetch(ADMIN_LOGIN_URL, {
//         method: POST,
//         headers: HEADERS,
//         body: body
//     })
// };
//
// export const updateItem = (body) => {
//     return fetch(UPDATE_PRODUCT_URL, {
//         method: PUT,
//         headers: HEADERS,
//         body: body
//     })
// }


// export const deleteUser = (body) => {
//     return fetch(DELETE_USER_URL, {
//         method: DELETE,
//         headers: HEADERS,
//         body: body
//     })
// }



// export const getToken = () => {
//     return fetch(TOKEN_URL, {
//         method: GET
//     })
// }