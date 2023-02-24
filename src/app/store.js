// Import createStore and combineReducers here.
//import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'

// Import the slice reducers here.
import { cartReducer } from '../features/cart/cartSlice';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice';
import { inventoryReducer } from '../features/inventory/inventorySlice'
import { searchTermReducer } from '../features/searchTerm/searchTermSlice'
// Create and export the store here.


const reducers = {
    cart: cartReducer,
    currency: currencyFilterReducer,
    inventory: inventoryReducer,
    search: searchTermReducer
}

// export const store = configureStore(combineReducers(reducers));
// Apparently, configureStore manages combineReducers by its own. So no need to use combineReducers with configureStore
export const store = configureStore({reducer: reducers});