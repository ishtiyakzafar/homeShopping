import * as actiontypes from "./shopping-types";

export const addToCart = (itemID) => {
  return {
    type: actiontypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actiontypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const loadCurrentItem = (itemID) => {
  return {
    type: actiontypes.LOAD_CURRENT_ITEM,
    payload: {
      id: itemID,
    },
  };
};

export const adjtQty = (itemID, value) => {
  return {
    type: actiontypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: +value,
    },
  };
};
