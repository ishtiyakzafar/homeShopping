import React from "react";
import CartItem from "./Cart-item";
import CartSummary from "./cart-summary";

import { connect } from "react-redux";

const Cart = ({ cart }) => {
  return (
    <>
      <div className="container py-5 ">
        <div className="row  ">
          <div className="col-md-8 ">
            {cart.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </div>
          <CartSummary />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
