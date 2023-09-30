import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../components";
import {
  Box,
  Button,
  Grid,
  Input,
  InputAdornment,
  TextField,
  colors,
} from "@mui/material";
import logo from "../images/avatar.png";
import styles from "./UserProfile.module.css";
import { AccountCircle, Mail, LocalPhone } from "@mui/icons-material";
const UserProfile = () => {
  const dispatch = useDispatch();

  return (
    <Box>
      <NavBar />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          {/* profile info */}
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            mt: "20px",
            p: "35px",
            bgcolor: "#1b263b",
          }}>
          <img id={styles["profile-img"]} alt="profile pic" src={logo} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              alignItems: "center",
              justifyContent: "center",
            }}>
            <TextField
              sx={{ width: "50%", m: "25px" }}
              id="name"
              label="Full name"
              variant="filled"
            />

            <TextField
              sx={{ width: "50%", m: "25px" }}
              id="email"
              label="Email"
              variant="filled"
            />

            <TextField
              sx={{ width: "50%", m: "25px" }}
              id="phone"
              label="Phone"
              variant="filled"
            />
            <TextField
              sx={{ width: "50%", m: "25px" }}
              id="city"
              label="City"
              variant="filled"
            />
            <Grid>
              <TextField
                sx={{ width: "50%", m: "25px" }}
                id="state"
                label="State"
                variant="filled"
              />
              <TextField
                sx={{ width: "50%", m: "25px" }}
                id="zip"
                label="Zip Code"
                variant="filled"
              />
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Button sx={{ width: "15%", mr: "25px"  }} variant="outlined">
              Back To Home
            </Button>
            <Button
              sx={{ width: "20%", bgcolor: "#415a77" }}
              variant="contained">
              Save Changes
            </Button>
          </Box>
        </Grid>
        <Grid item xs={3}>
          {/*  person you may know */}
        </Grid>
      </Grid>
    </Box>
  );
};
export default UserProfile;
