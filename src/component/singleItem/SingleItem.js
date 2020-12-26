import React from "react";

import { connect } from "react-redux";
import { addToCart } from "../../redux/shopping/shopping-action";

const SingleItem = ({ currentItem, addToCart }) => {
  return (
    <>
      <div className=" container mt-5">
        <div className="row g-0">
          <div className="col-md-6 SingleItem_img">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="rounded img-fluid"
            />
          </div>
          <div className="col-md-6 SingleItem_detail d-flex align-items-center">
            <div className="card-body">
              <h5 className="card-title">{currentItem.title}</h5>
              <p className="card-text">{currentItem.description}</p>
              <h6 className="">₹ {currentItem.price}</h6>
              <button
                onClick={() => addToCart(currentItem.id)}
                className=" btn btn-outline-success"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(SingleItem);
