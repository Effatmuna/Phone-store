import React, { Component } from "react";

import { Link } from "react-router-dom";
export default class CartTotals extends Component {
  render() {
    const {
      cartSubTotal,
      cartTax,
      cartTotal,
      cart,
      clearCart
    } = this.props.value;
    const { history } = this.props;
    const emptyCart = cart.length === 0 ? true : false;
    return (
      <React.Fragment>
        {!emptyCart && (
          <div className="container" id="subtotal">
            <div className="row" >
              <div className=" mt-3 text-capitalize table" >
              
                <h5>
                  <span className="text-title"> subtotal :</span>{" "}
                  <strong>$ {cartSubTotal} </strong>
                </h5>
                <hr/>
                <h5>
                  <span className="text-title"> tax :</span>{" "}
                  <strong>$ {cartTax} </strong>
                </h5>
                <hr/>
                <h5>
                  <span className="text-title"> total :</span>{" "}
                  <strong>$ {cartTotal} </strong>
                </h5>
                
               <hr/>
               <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3"
                    type="button"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    clear cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}