import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LifeLine } from "react-loading-indicators";
import useFetch from "../custom-hook/useFetch";
import { FaShoppingCart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdFolderDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const ProductList = () => {
  let navigate = useNavigate();
  let { products, isLoading, error, setProducts } = useFetch(
    "http://localhost:5000/products"
  );
  let handleDelete = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`).then(() => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Product Deleted.",
            icon: "success",
          });
        }
      });
      let newitemList = products.filter((product) => product.id !== id);
      setProducts(newitemList);
    });
  };
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
                    <Card.Text>{product.price}</Card.Text>
                  </Card.Body>
                  <Card.Footer
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Button variant="primary">
                      <FaShoppingCart />
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        navigate(`/update/${product.id}`);
                      }}
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleDelete(product.id);
                      }}
                    >
                      <MdFolderDelete />
                    </Button>
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
