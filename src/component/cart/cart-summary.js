import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

const CartSummary = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    let price = 0;
    let items = 0;
    cart.forEach((item) => {
      price += item.price * item.qty;
      items += item.qty;
    });
    setTotalPrice(price);
    setTotalItem(items);
  }, [cart]);

  return (
    <>
      <div className="col-md-4">
        <div className="card  mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Cart Summary</div>
          <div className="card-body">
            <h5 className="card-title">
              TOTAL : ({totalItem} items)
              <br />₹ {totalPrice}
            </h5>
            <button className=" btn btn-outline-success">
              proceed to checkout
            </button>
          </div>
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

export default connect(mapStateToProps)(CartSummary);
