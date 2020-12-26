import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";

const CartBtn = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart]);

  return (
    <>
      <div className="cart_btn">
        <NavLink to="/Cart">
          cart
          <i className="fas fa-shopping-cart"></i>
          <span className="cart_qty_box">{cartCount}</span>
        </NavLink>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(CartBtn);
