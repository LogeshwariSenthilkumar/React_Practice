import React from "react";
import ProductDetails from "./ProductDetails";

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Product List</h1>
    <ProductDetails 
    deepName={products.name}
    deepDes={products.des}
    deepPrice={products.price}
    />
    </div>
  );
};

export default ProductList;
