// Import createStore and combineReducers here.
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'

// Import the slice reducers here.
import { cartReducer } from '../features/cart/cartSlice';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice';
import { inventoryReducer } from '../features/inventory/inventorySlice'
// Create and export the store here.


const reducers = {
    cart: cartReducer,
    currency: currencyFilterReducer,
    inventory: inventoryReducer
}

export const store = configureStore(combineReducers(reducers));