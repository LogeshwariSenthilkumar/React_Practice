import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LifeLine } from "react-loading-indicators";
import useFetch from "../custom-hook/useFetch";
const ProductList = () => {
  let {products,isLoading,error}=useFetch("http://localhost:5000/products");
  if (isLoading) {
    return (
      <div>
        <center>
          <LifeLine
            color="#32cd32"
            size="large"
            text="Loading..."
            textColor="red"
          />
        </center>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Product List</h1>
        {products.length > 0 && (
          <section className="products">
            {products.map((product) => {
              return (
                <Card
                  style={{ width: "18rem" }}
                  key={product.id}
                  className="product"
                >
                  <center>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      style={{ width: "9rem", height: "12rem" }}
                    />
                  </center>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text style={{ overflow: "scroll", height: "100px" }}>
                      {product.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Card.Text>{product.price}</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Footer>
                </Card>
              );
            })}
          </section>
        )}
        {error && <p>{error}</p>}
      </div>
    );
  }
};

export default ProductList;
