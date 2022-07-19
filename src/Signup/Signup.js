import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
import Topbar from "../components/Topbar";
//import styles from "./styles.module.css";
import MuiAlert from "@mui/material/Alert";
//import { useAuth } from "../ProtectedRoutes";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  //const auth = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    age: "",
  });
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "https://project-pinterest-clone.herokuapp.com/users/signup";

      const { data: res } = await axios.post(url, data);
      setMsg(res.message);
      navigate("/login");
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
          <div className="form-group">
            <TextField
              id="age"
              label="Age"
              name="age"
              type="number"
              variant="outlined"
              value={data.age}
              onChange={handleChange}
            />
          </div>
          {error && (
            <div className="alert-msg">
              <Alert severity="error">{error}</Alert>
            </div>
          )}
          {msg && (
            <div className="alert-msg">
              <Alert severity="success">{msg}</Alert>
            </div>
          )}
          <div className="form-group">
            <Button type="submit" variant="contained" color="error" fullWidth>
              Continue
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

export default Signup;
