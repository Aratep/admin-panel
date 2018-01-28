import {ALL_PRODUCTS, REMOVE_PRODUCT} from '../constants/constants'

const products = (state = [], action) => {
    switch (action.type) {
        case ALL_PRODUCTS:
            return {...state,  products: action.products, count: action.count};
        case REMOVE_PRODUCT:
            return {...state, products: state.products.filter(prod => prod._id !== action.id), count: state.count-1};
        default:
            return state
    }
}



export default products