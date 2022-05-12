import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppBar, Avatar, Button, Typography, Toolbar } from "@mui/material";
import decode from "jwt-decode";
import Auth from "../Auth/Auth";
import Home from "../Home/Home";
import useStyles from "./styles";

const Navbar = () => {
  const styles = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/auth");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AppBar className={styles.appBar} position="static">
      <div className={styles.brandContainer}>
        <Link element={<Home />} to="/" style={{ textDecoration: "none" }}>
          <Typography className={styles.heading} variant="h5" align="center">
            Collect.io
          </Typography>
        </Link>
      </div>
      <Toolbar className={styles.toolbar}>
        {user?.result ? (
          <div className={styles.profile}>
            <Avatar
              className={styles.purple}
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={styles.userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              className={styles.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Link
            element={<Auth />}
            to="/auth"
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained">Sign In</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
