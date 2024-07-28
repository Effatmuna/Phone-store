import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";
import { ButtonContainer } from "./Button";
const Navbar = () => {
  return (
    <NavWapper className="navbar navbar-expand-sm bg-light navbar-dark px-sm-5 d-flex justify-content-between">

      <Link to="/">
        <img src={logo} alt="store" className="navbar-brand w-75" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item">
          <Link to="/" className="nav-link">
           <span className="display-7">All Product</span>
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="">
        <ButtonContainer>
          <span className="">
            <i className="fas fa-cart-plus " />
          </span>
            <span className="text-dark">cart</span>
        </ButtonContainer>
      </Link>
    </NavWapper>
  );
}


const NavWapper = styled.nav`
  background: var(--mainBlue);
  border-bottom:1px solid skyblue;
    position: fixed;
  top:0%;
  width: 100%;
  z-index: 1000;
  
  
  .nav-link {
 
    font-size:1.3rem;
    text-transform:capitalize;
  }
    span{
       color: black;
    }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row;
    }
  }
`;



export default Navbar;