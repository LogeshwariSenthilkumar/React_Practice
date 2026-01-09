import React from "react";
import useFetch from "../custom-hook/useFetch";

const Home = () => {
  let {products}=useFetch("http://localhost:5000/products")
  return <div>Home - Total Products {products.length}</div>;
};

export default Home;
