import React from "react";
import Items from "./Items";

import { connect } from "react-redux";

const Product = ({ products }) => {
  return (
    <>
      <div className="container py-5">
        <div className="row  ">
          {products.map((item) => {
            return <Items key={item.id} itemData={item} />;
          })}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Product);
