import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import Layout from "./components/Layout";
import ProductsList from "./views/ProductsList";
import Cart from "./components/Cart";
import LogInPage from "./views/LogInPage";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="homepage" element={<HomePage />} />
            <Route path="productsList" element={<ProductsList />} />
            <Route index element={<Cart />} />
          </Route>
          <Route path="logIn" element={<LogInPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
