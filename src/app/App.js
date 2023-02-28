import React from 'react';

import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm'
// Import the Cart component here.
import { Cart } from '../features/cart/Cart.js'



// Render the Cart component below <Inventory />
export const App = (props) => {

  const { state, dispatch } = props;

  const visibleAllItems = getFilteredItems(state.inventory, state.search);

  function getFilteredItems(items, searchTerm) {
    return items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  
  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currency}
        dispatch={dispatch}
      />

      <Inventory
        inventory={visibleAllItems}
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
