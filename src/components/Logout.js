import React from "react";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Logout() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const onClick = () => {
    setAuth({ isLogin: false });
    navigate(from, { replace: true });
  };
  return (
    <MenuItem onClick={onClick}>
      <LogoutIcon sx={{ marginRight: 1 }} />
      <Typography
        noWrap
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        Sign out
      </Typography>
    </MenuItem>
  );
}

export default Logout;
