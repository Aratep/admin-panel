import {SINGLE_PRODUCT} from '../constants/constants';

const product = (state = [], action) => {
    switch (action.type) {
        case SINGLE_PRODUCT:
            return {...state, product: action.product};
        // case REMOVE_PRODUCT:
        //     return {...state, product:undefined};
        default:
            return state
    }
}

export default product