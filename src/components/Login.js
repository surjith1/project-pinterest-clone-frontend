import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Topbar from "./Topbar";
import MuiAlert from "@mui/material/Alert";
import { useAuth } from "../ProtectedRoutes";

const Login = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      auth.login(data);
      const url = "http://localhost:5000/auth/login";
      const { data: res } = await axios.post(url, data);
      setSuccess(res.message);
      localStorage.setItem("token", res.data);
      navigate("/dashboard-home");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  return (
    <>
      <Topbar />
      <div className="signup-wrap">
        <div className="signup-intro">
          <p>
            <i className="fa-brands fa-pinterest"></i>
          </p>
          <h2>Welcome to Pinterest</h2>
          <p className="p-small">Find new ideas to try</p>
        </div>
        <form className="form-wrap" onSubmit={handleSubmit}>
          <div className="form-group">
            <TextField
              type="email"
              id="email"
              label="Email"
              name="email"
              variant="outlined"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <TextField
              id="password"
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              value={data.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group fg-psw">
            <p className="text-left">
              <Link to="/forgot-password">Forgot Password</Link>
            </p>
          </div>
          {error && (
            <div className="alert-msg">
              <Alert severity="error">{error}</Alert>
            </div>
          )}
          {success && (
            <div className="alert-msg">
              <Alert>{success}</Alert>
            </div>
          )}
          <div className="form-group">
            <Button type="submit" variant="contained" color="error" fullWidth>
              Login
            </Button>
            <h3>OR</h3>
            <p>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<FacebookIcon />}
                href="https://www.facebook.com/login/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Continue with Facebook
              </Button>
            </p>
            <p>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                startIcon={<GoogleIcon />}
                href="https://accounts.google.com/servicelogin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Continue with Google
              </Button>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
