import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../components";
import { Box, Button, Grid, TextField } from "@mui/material";
import logo from "../images/avatar.png";
import { updateUser } from "../features/userSlice";
import { useForm } from "react-hook-form";
import styles from "../styles/UserProfile.module.css";

const UserProfile = () => {
  const { user } = useSelector((state) => state);
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setUserData(data);
    dispatch(updateUser(userData));
  };
  return (
    <>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <img id={styles["profile-img"]} alt="profile pic" src={logo} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <TextField
                defaultValue={user.fullName}
                required
                sx={{
                  width: "50%",
                  m: "25px",
                  bgcolor: "#415a77",
                  borderRadius: "25px",
                }}
                id="name"
                label="Full name"
                variant="filled"
                {...register("fullName", {
                  required: "full name is required.",
                })}
              />
              {errors.fullName && (
                <p className="errorMsg">{errors.fullName.message}</p>
              )}

              <TextField
                defaultValue={user.email}
                required
                sx={{
                  width: "50%",
                  m: "25px",
                  bgcolor: "#415a77",
                  borderRadius: "25px",
                }}
                id="email"
                label="Email"
                variant="filled"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
              />
              {errors.email && (
                <p className="errorMsg">{errors.email.message}</p>
              )}

              <TextField
                defaultValue={user.jobTitle}
                sx={{
                  width: "50%",
                  m: "25px",
                  bgcolor: "#415a77",
                  borderRadius: "25px",
                }}
                id="job-title"
                label="Job title"
                variant="filled"
                {...register("jobTitle", {
                  pattern: {
                    message: "Please enter valid name",
                    value: /^[a-zA-Z ]*$/,
                  },
                })}
              />
              {errors.jobTitle && (
                <p className="errorMsg">{errors.jobTitle.message}</p>
              )}

              <TextField
                defaultValue={user.phone}
                sx={{
                  width: "50%",
                  m: "25px",
                  bgcolor: "#415a77",
                  borderRadius: "25px",
                }}
                {...register("phone", {
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter a valid number",
                  },
                })}
                name="phone"
                id="phone"
                label="Phone"
                variant="filled"
              />
              {errors.phone && (
                <p className="errorMsg">{errors.phone.message}</p>
              )}

              <TextField
                defaultValue={user.city}
                sx={{
                  width: "50%",
                  m: "25px",
                  bgcolor: "#415a77",
                  borderRadius: "25px",
                }}
                id="city"
                name="city"
                label="City"
                variant="filled"
                {...register("city", {})}
              />
              {errors.city && <p className="errorMsg">{errors.city.message}</p>}

              <Grid>
                <TextField
                  defaultValue={user.state}
                  sx={{
                    width: "50%",
                    m: "25px",
                    bgcolor: "#415a77",
                    borderRadius: "25px",
                  }}
                  id="state"
                  label="State"
                  variant="filled"
                  {...register("state", {})}
                />
                {errors.state && (
                  <p className="errorMsg">{errors.state.message}</p>
                )}

                <TextField
                  defaultValue={user.zipCode}
                  sx={{
                    width: "50%",
                    m: "25px",
                    bgcolor: "#415a77",
                    borderRadius: "25px",
                  }}
                  id="zip"
                  label="Zip Code"
                  variant="filled"
                  {...register("zipCode", {
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Please enter a valid zip code",
                    },
                  })}
                />
                {errors.zipCode && (
                  <p className="errorMsg">{errors.zipCode.message}</p>
                )}
              </Grid>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Button
                type="reset"
                sx={{
                  width: "20%",
                  mr: "25px",
                  textTransform: "none",
                  borderRadius: "25px",
                }}
                variant="outlined">
                Back To Home
              </Button>
              <Button
                type="submit"
                sx={{
                  width: "20%",
                  bgcolor: "#415a77",
                  textTransform: "none",
                  borderRadius: "25px",
                }}
                variant="contained">
                Save Changes
              </Button>
            </Box>
          </form>
        </Grid>
        <Grid item xs={3}>
          {/*  person you may know */}
        </Grid>
      </Grid>
    </>
  );
};
export default UserProfile;
