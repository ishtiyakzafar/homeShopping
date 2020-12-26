import React, { useState } from "react";

import { connect } from "react-redux";
import { removeFromCart, adjtQty } from "../../redux/shopping/shopping-action";

const CartItem = ({ item, removeFromCart, adjtQty }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjtQty(item.id, e.target.value);
  };

  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.image} className="img-fluid" alt={item.title} />
            {/* {console.log(item)} */}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <h6 className="">₹ {item.price}</h6>

              <div className="d-flex justify-content-around ">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className=" btn btn-outline-success"
                >
                  Remove from cart
                </button>
                <div>
                  <span className="ml-5"> Qty </span>
                  <input
                    className="adjustQty"
                    onChange={onChangeHandler}
                    type="number"
                    name=""
                    value={input}
                    min="1"
                    max="5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjtQty: (id, value) => dispatch(adjtQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
