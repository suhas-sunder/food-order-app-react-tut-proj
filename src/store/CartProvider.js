import { useReducer } from 'react';

import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// Add items to meals within cart menu
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    // Add existing total to new cart item total
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // If cart item already exists, link to ref in global storage
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    // Manage existing cart items to avoid duplicate entries
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // Remove items to meals within cart menu
  if (action.type === 'REMOVE') {
    console.log("runs")
    // If cart item already exists, link to ref in global storage
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    // Manage existing cart items to avoid duplicate entries
    if (existingItem.amount === 1) {
      // Removes cart item from array
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      // Decrement cart item amount
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;