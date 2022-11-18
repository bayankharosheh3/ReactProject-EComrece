import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import Layout from "./components/Layout";
import ProductsList from "./views/ProductsList";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="productsList" element={<ProductsList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
