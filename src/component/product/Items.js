import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  addToCart,
  loadCurrentItem,
} from "../../redux/shopping/shopping-action";

const Items = ({ itemData, addToCart, loadCurrentItem }) => {

  const add = () => {
    addToCart(itemData.id);
  };

  return (
    <>
      <div className="  col-md-3 col-11 mx-auto g-4">
        <div className="shadow">
          <img
            className="card-img-top item_img"
            src={itemData.image}
            alt={itemData.title}
          />
          <div className="p-2">
            <Link to="/singleItem" onClick={() => loadCurrentItem(itemData.id)} className="">{itemData.title}</Link>
            <p className="item_disc">{itemData.description}</p>
            <h6 className="text-danger text-center">₹ {itemData.price}</h6>

            <div className="d-flex justify-content-between">
              <Link
                to="/singleItem"
                onClick={() => loadCurrentItem(itemData.id)}
                className="btn btn-outline-primary"
              >
                View item
              </Link>
              <button onClick={add} className=" btn btn-outline-success">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (id) => dispatch(loadCurrentItem(id)),
  };
};

export default connect(null, mapDispatchToProps)(Items);
