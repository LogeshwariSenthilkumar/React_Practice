import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  let { user } = useParams();
  let navigate = useNavigate();

  return (
    <div>
      Login-{user} <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default Login;
