import React from "react";
import "./register.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";

function Register(props) {
  return (
    <div className="container">
      <div className="register">
        <h1>Hello there</h1>
        <Box sx={{ display: "flex", alignItems: "flex-end" }} className="dd">
          <AccountCircle
            sx={{ color: "rgba(33, 78, 255, 1) ", mr: 1, my: 0.5 }}
          />
          <TextField id="input" label="full name" variant="standard" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }} className="dd">
          <EmailIcon sx={{ color: "rgba(33, 78, 255, 1) ", mr: 1, my: 0.5 }} />
          <TextField id="input" label="full name" variant="standard" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <LockIcon sx={{ color: "rgba(33, 78, 255, 1) ", mr: 1, my: 0.5 }} />
          <TextField
            variant="standard"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </Box>
        <Button id="btn" variant="outlined">
          Register
        </Button>
      </div>
      <div className="welcome">
        <div>
          <h1 id="title">Glad to see you</h1>
          <p>Create you account for free Now !</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
