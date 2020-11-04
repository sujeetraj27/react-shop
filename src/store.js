import {createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducer/cartReducer';
import { productsReducer } from './reducer/productReducers';

const initialState= {};
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMNPOSE_ || compose;
const store = createStore(
    combineReducers({
        products: productsReducer,
        cart: cartReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;