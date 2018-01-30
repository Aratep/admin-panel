import {ADD_VARIANT_FORM, REMOVE_VARIANT_FORM} from '../constants/constants'

const variantForm = (state = [], action) => {
    switch (action.type) {
        case ADD_VARIANT_FORM:
            return [
                ...state,
                {
                    id: action.id,
                    node: action.node,
                }
            ];
        case REMOVE_VARIANT_FORM:
            return state.filter(form => {
                return form.id !== action.id
            })
        default:
            return state
    }
}

export default variantForm