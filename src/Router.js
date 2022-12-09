import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import Layout from "./components/Layout";
import ProductsList from "./views/ProductsList";
import Cart from "./components/Cart";
import LogInPage from "./views/LogInPage";
import ProductDetails from "./views/ProductDetails";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="productsList" element={<ProductsList />} />
            <Route path="cart" element={<Cart />} />
            <Route path=":Id" element={<ProductDetails />} />
          </Route>
          <Route path="logIn" element={<LogInPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
