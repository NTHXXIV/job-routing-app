import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

function Login() {
  return (
    <div>
      <Link to="/signin" color="inherit">
        <IconButton aria-label="login">
          <LoginIcon sx={{ marginRight: 1 }} />
          <Typography
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Sign in
          </Typography>
        </IconButton>
      </Link>
    </div>
  );
}

export default Login;
