import React from "react";

const CartContext = React.createContext({
  items: [],
  amount: 0,
  updateItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
