import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <div className="top-bar-wrap">
      <AppBar position="static">
        <Toolbar disableGutters>
          <i className="fa-brands fa-pinterest"></i>
          <Typography variant="h6" color="inherit" component="div">
            Pinterest
          </Typography>
          <Typography className="menu-item">
            <span>About</span>
            <span>Business</span>
            <span>Blog</span>
          </Typography>
          <div className="btn-group">
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              onClick={() => navigate("/signup")}
            >
              Signup
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Topbar;
