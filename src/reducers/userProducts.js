import {USER_PRODUCTS} from '../constants/constants';

const userProducts = (state = [], action) => {
    switch (action.type) {
        case USER_PRODUCTS:
            return {...state,  userProducts: action.userProducts};
        // case REMOVE_USER_PRODUCT:
        //     console.log(state)
        //     return {...state, userProducts: state.userProducts.filter(prod => prod._id !== action.id)};
        default:
            return state
    }
}



export default userProducts