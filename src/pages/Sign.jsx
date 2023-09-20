import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import styles from "./register.module.css";
function Sign(props) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    navigate("/home");

    console.log(data);
  };
  return (
    <div className={styles.form}>
      <div className="container">
        <div className="register">
          <h1>Welcome back</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <Button
              type="submit"
              id="btn"
              variant="outlined"
              style={{ textTransform: "none" }}>
              Sign in
            </Button>
            <label
              style={{
                margin: ".8rem",
                fontFamily: "sans-serif",
                fontSize: "15px",
                marginLeft: "1rem",
              }}>
              <span>
                Don't have account{" "}
                <Link to="/register">
                  <span style={{ color: "#0096c7", fontWeight: "bold" }}>
                    Register
                  </span>
                </Link>
              </span>
            </label>
          </form>
        </div>
        <div className="welcome">
          <div>
            <h1 id="title">Don't miss the chance</h1>
            <p id="text" >Stay in touch</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sign;
