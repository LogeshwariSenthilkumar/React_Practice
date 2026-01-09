import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };
  let navigate=useNavigate();
  let [updateProducts, setUpdateProducts] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((response) => setUpdateProducts(response.data));
  }, []);
  let handleChange = (e) => {
    let { value, name } = e.target;
    let fieldName = name.split("rating.")[1];
    if (name.includes("rating.")) {
      setUpdateProducts({
        ...updateProducts,
        rating: {
          ...updateProducts.rating,
          [fieldName]: value,
        },
      });
    } else {
      setUpdateProducts({ ...updateProducts, [name]: value });
    }
  };
  let handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProducts),
    }).then(() => {
      alert("Product Updated");
      navigate("/products")
    });
  };
  if (updateProducts !== null) {
    return (
      <Paper elevation={20} style={paperStyle}>
        <Typography variant="h5" textAlign="center">
          Update New Product
        </Typography>
        <Grid
          style={{ display: "grid", gap: "20px" }}
          component="form"
          onSubmit={handleUpdate}
        >
          <TextField
            name="title"
            label="Title"
            variant="outlined"
            value={updateProducts.title}
            onChange={handleChange}
          />
          <TextField
            name="category"
            label="Category"
            variant="outlined"
            value={updateProducts.category}
            onChange={handleChange}
          />
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                name="rating.rate"
                label="Rate"
                variant="outlined"
                value={updateProducts.rating.rate}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                name="rating.count"
                label="Count"
                variant="outlined"
                value={updateProducts.rating.count}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="success" type="submit">
            Save
          </Button>
        </Grid>
      </Paper>
    );
  } else {
    <div>
      <h1>Loading...</h1>
    </div>;
  }
};

export default UpdateProduct;
