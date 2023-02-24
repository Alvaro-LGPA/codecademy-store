import React from 'react';

import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm'
// Import the Cart component here.
import { Cart } from '../features/cart/Cart.js'
// Render the Cart component below <Inventory />
export const App = (props) => {

  const { state, dispatch } = props;

  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currency}
        dispatch={dispatch}
      />

      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currency}
        dispatch={dispatch}
      />

      <Cart
      cart={state.cart}
      currencyFilter={state.currency}
      dispatch={dispatch}
      />

      <SearchTerm
        searchTerm={state.search}
        dispatch={dispatch}
      />

    </div>
  );
};
