import React, { useState } from "react";
import styles from "./ProfilInfo.module.css";
import { Box, Container, Typography } from "@mui/material";
import logo from "../images/avatar.png";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProfileInfo() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const toProfile = () => {
    navigate("/profile");
  };
  return (
    <>
      <Container container spacing={3} className={styles.container}>
        <EditIcon
          onClick={() => toProfile()}
          sx={{ color: "white", ml: "90%", mt: "10px", cursor: "pointer" }}
        />
        <img
          className={styles.profilePicture}
          src={logo}
          alt="profile picture"
        />
        <Box className={styles.infoContainer}>
          <p className={styles.info}> {user.fullName} </p>

          {user.jobTitle && <p className={styles.info}> {user.jobTitle} </p>}
        </Box>
      </Container>
    </>
  );
}
