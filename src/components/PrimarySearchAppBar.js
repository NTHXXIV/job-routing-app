import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Login from "./Login";
import useAuth from "../hooks/useAuth";
import Logout from "./Logout";
import SearchBar from "./SearchBar";

export default function MenuAppBar({ onSubmit }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { auth } = useAuth();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <SearchBar onSubmit={onSubmit} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Job Routing
          </Typography>

          {auth.isLogin ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
                <Typography variant="h6" ml={1}>
                  {auth.email}
                </Typography>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <Logout />
              </Menu>
            </div>
          ) : (
            <Login />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
