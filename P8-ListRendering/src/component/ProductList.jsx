import React from "react";
import ProductDetails from "./ProductDetails";
import { userContext } from "./Content";

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Product List</h1>
      <article>
       <userContext.Consumer>
        {
          ({user})=>{
           return <h1>
            {user.uName}
           </h1>
          }
        }
       </userContext.Consumer>
      </article>
    <ProductDetails 
    deepName={products.name}
    deepDes={products.des}
    deepPrice={products.price}
    />
    </div>
  );
};

export default ProductList;
