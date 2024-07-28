import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
class App extends Component {
  render() {
    return (

      <React.Fragment>
        <Navbar />
        <Routes>
          
          <Route exact path="/" element={<ProductList />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1 className="text-center p-5">Page not found</h1>} />
        </Routes>
        <Modal />
      </React.Fragment>


    );
  }
}

export default App;