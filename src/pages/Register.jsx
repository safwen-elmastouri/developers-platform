import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../context/GlobalState";
import styles from "./register.module.css"

const Register = (props) => {
  const { registerUser,user } = useContext(GlobalContext);

  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    clicked && navigate("/home");
    registerUser(data)
  };
  return (
    <div className={styles.form}  >
      <div className="container">
        <div className="register">
          <h1>Hello there</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{ display: "flex", alignItems: "flex-end" }}
              className="input">
              <AccountCircle
                sx={{ color: "rgba(33, 78, 255, 1) ", mr: 1, my: 0.5 }}
              />
              <TextField
                id="input"
                type="text"
                label="fullName"
                variant="standard"
                name="fullName"
                {...register("fullName", {
                  required: "full name is required.",
                })}
              />
            </Box>
            {errors.fullName && (
              <p className="errorMsg">{errors.fullName.message}</p>
            )}
            <Box
              sx={{ display: "flex", alignItems: "flex-end" }}
              className="input">
              <EmailIcon
                sx={{ color: "rgba(33, 78, 255, 1) ", mr: 1, my: 0.5 }}
              />
              <TextField
                id="input"
                label="email"
                variant="standard"
                name="email"
                type="text"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
              />
            </Box>
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}

            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LockIcon
                sx={{ color: "rgba(33, 78, 255, 1) ", mr: 1, my: 0.5 }}
                className="input"
              />
              <TextField
                variant="standard"
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                {...register("password", {
                  required: true,
                  validate: {
                    checkLength: (value) => value.length >= 6,
                    matchPattern: (value) =>
                      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                        value
                      ),
                  },
                })}
              />
            </Box>
            {errors.password?.type === "required" && (
              <p className="errorMsg">Password is required.</p>
            )}
            {errors.password?.type === "checkLength" && (
              <p className="errorMsg">
                Password should be at-least 6 characters.
              </p>
            )}
            {errors.password?.type === "matchPattern" && (
              <p className="errorMsg">
                Password should contain at least one uppercase letter, lowercase
                letter, digit, and special symbol.
              </p>
            )}
            <label style={{ margin: ".8rem", fontFamily: "-moz-initial" }}>
              <input type="checkbox" onClick={() => setClicked(!clicked)} />
              <span>
                Accept{" "}
                <span style={{ color: "#0096c7", fontWeight: "bold" }}>
                  terms & conditions
                </span>
              </span>
            </label>
            <Button type="submit" id="btn" variant="outlined" style={{textTransform: 'none'}} >
              Register
            </Button>
            <label
              style={{
                margin: ".8rem",
                fontFamily: "sans-serif",
                fontSize: "15px",
                marginLeft: "1rem",
              }}>
              <span>
                Already have account{" "}
                <Link to="/">
                  <span style={{ color: "#0096c7", fontWeight: "bold" }}>
                    Sign in
                  </span>
                </Link>
              </span>
            </label>
          </form>
        </div>
        <div className="welcome">
          <div>
            <h1 id="title">Glad to see you</h1>
            <p id="text" >Create you account for free Now !</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
