import * as actiontypes from "./shopping-types";
import {itemSrc } from '../../productData/item-source'

const initialState = {
  products: itemSrc,
  cart: [],
  currentItem: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.ADD_TO_CART:
      //search for the item from products array
      const item = state.products.find((prod) => prod.id === action.payload.id);

      //check if item is in the cart already or not
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case actiontypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actiontypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: state.products.find(
          (prod) => prod.id === action.payload.id
        ),
      };

    case actiontypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };

    default:
      return state;
  }
};
export default shopReducer;
