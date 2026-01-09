import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const NewProducts = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };
  let [newProducts, setNewProducts] = useState({
    title: "",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  let handleChange = (e) => {
    let { value, name } = e.target;
    let fieldName = name.split("rating.")[1];
    if (name.includes("rating.")) {
      setNewProducts({
        ...newProducts,
        rating: {
          ...newProducts.rating,
          [fieldName]: value,
        },
      });
    } else {
      setNewProducts({ ...newProducts, [name]: value });
    }
  };
  let handleAdd = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProducts),
    }).then(() => {
      alert("Product Added");
      setNewProducts({
        title: "",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        rating: {
          rate: 0,
          count: 0,
        },
      });
    });
  };
  return (
    <Paper elevation={20} style={paperStyle}>
      <Typography variant="h5" textAlign="center">
        Create New Product
      </Typography>
      <Grid
        style={{ display: "grid", gap: "20px" }}
        component="form"
        onSubmit={handleAdd}
      >
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          value={newProducts.title}
          onChange={handleChange}
        />
        <TextField
          name="category"
          label="Category"
          variant="outlined"
          value={newProducts.category}
          onChange={handleChange}
        />
        <Grid container spacing={2}>
          <Grid size={6}>
            <TextField
              name="rating.rate"
              label="Rate"
              variant="outlined"
              value={newProducts.rating.rate}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              name="rating.count"
              label="Count"
              variant="outlined"
              value={newProducts.rating.count}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button variant="contained" type="submit">
          Add
        </Button>
      </Grid>
    </Paper>
  );
};

export default NewProducts;
