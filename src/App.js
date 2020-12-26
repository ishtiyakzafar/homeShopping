import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Product from "./component/product/Product";
import Cart from "./component/cart/Cart";
import SingleItem from "./component/singleItem/SingleItem";

//redux
import { connect } from "react-redux";

const App = ({ currentItem }) => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Product} />
        <Route exact path="/cart" component={Cart} />
        {!currentItem ? (
          <Redirect to="/" />
        ) : (
          <Route exact path="/singleItem" component={SingleItem} />
        )}
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
