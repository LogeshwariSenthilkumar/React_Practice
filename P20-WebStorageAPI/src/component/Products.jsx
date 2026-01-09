import React from "react";
import { Link, Outlet } from "react-router-dom";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <div>
      <ProductList/>
    </div>
  );
};

export default Products;
