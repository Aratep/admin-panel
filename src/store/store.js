import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import products from '../reducers/products'
import product from '../reducers/product'

const rootReducer = combineReducers({
    form: formReducer,
    products,
    product
});

const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, REDUX_DEVTOOLS);

export default store