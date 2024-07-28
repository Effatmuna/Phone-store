import React, { Component } from "react";
import Title from "./Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "../Context";
import EmptyCart from "./EmptyCart";
export default class Store extends Component {
  render() {
    return (
      <section className="container-fluid " id="cart">
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <div className="mb-4 pt-4">
                  <Title name="your" title="cart" />
                  </div>
                  <div className="row" >
                   <div className="col-lg-9" id="border">
                  <CartColumns />
                  <CartList value={value} />
                  </div>
                  <div className="col-lg-3">
                  <CartTotals value={value} history={this.props.history} />
                 </div>
                 </div>
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}