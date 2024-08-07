import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container " id="modal">
                  <div className="row">
                    <div
                      className="col-8 mx-auto col-md-6 col-lg-4 p-4  text-center text-capitalize"
                      
                    >
                      <h5>item added to cart</h5>
                      <img src={img} className="img-fluid" alt="" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : ${price}</h5>
                      <Link to="/">
                        <ButtonContainer
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Continue Shopping
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer
                        
                          onClick={() => {
                            closeModal();
                      
                          }}
                        >
                          Go To Cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: white;
    min-height:400px;
    margin-top:50px;
    width:60%;
  }
`;