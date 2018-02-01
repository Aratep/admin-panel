import {ALL_USERS} from '../constants/constants'

const users = (state = [], action) => {
    switch (action.type) {
        case ALL_USERS:
            return {...state,  users: action.users, count: action.count};
        // case REMOVE_PRODUCT:
        //     return {...state, products: state.products.filter(prod => prod._id !== action.id), count: state.count-1};
        default:
            return state
    }
}



export default users