import React from "react";
import { Paper, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

let renderCount = 0;
const SignUp = () => {
  let schema = Yup.object().shape({
    name: Yup.string()
      .required("Name is Required")
      .matches(/^[A-z][a-z]+ [A-Z][a-z]+$/,"Enter Full Name"),
    email: Yup.string()
      .required("Email is Required")
      .matches(/^[a-z0-9]+@[a-z]{3,5}.[a-z]{2,5}$/,"Enter Valid Email"),
    age: Yup.number()
    .integer()
    .positive().required("Age is Required").min(18,"Enter Age Above 18").max(35,"Enter Age below 35"),
    password: Yup.string().required("Password is Required"),
    cpassword: Yup.string().required("Confirm Password is Required").oneOf([Yup.ref("password"),null],"Password must Match"),
  });
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
    display: "grid",
    gap: "20px",
  };
  renderCount++;
  let [input, setInput] = useState("");
  let handleChange = (e) => {
    setInput(e.target.value);
  };
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  let handleData = (data) => {
    console.log(data);
  };
  return (
    <Paper
      elevation={20}
      style={paperStyle}
      component="form"
      onSubmit={handleSubmit(handleData)}
    >
      <Typography variant="h5" textAlign="center">
        Create Account-{renderCount}
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        {...register("name")}
        helperText={errors.name?.message}
        error={!!errors.name}
      />
      <TextField
        label="Email"
        variant="outlined"
        {...register("email")}
        helperText={errors.email?.message}
        error={!!errors.email}
      />
      <TextField
        label="Age"
        variant="outlined"
        {...register("age")}
        helperText={errors.age?.message}
        error={!!errors.age}
      />
      <TextField
        label="Password"
        variant="outlined"
        {...register("password")}
        helperText={errors.password?.message}
        error={!!errors.password}
      />
      <TextField
        label="Confirm Password"
        variant="outlined"
        {...register("cpassword")}
        helperText={errors.cpassword?.message}
        error={!!errors.cpassword}
      />
      <Button variant="contained" type="submit">
        Create
      </Button>
    </Paper>
  );
};

export default SignUp;
