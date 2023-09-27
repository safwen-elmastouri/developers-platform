import React, { useState } from "react";
import styles from "./ProfilInfo.module.css";
import { Box, Container, Typography } from "@mui/material";
import logo from "../images/avatar.png";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";

export default function ProfileInfo() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Container container spacing={3} className={styles.container}>
        <EditIcon sx={{ color: "white", ml: "90%", mt: "10px" }} />
        <img
          className={styles.profilePicture}
          src={logo}
          alt="profile picture"
        />
        <Box className={styles.infoContainer}>
          <p className={styles.info}> {user.fullName} </p>
          <p className={styles.info}> Web Developer </p>
        </Box>
      </Container>
    </>
  );
}
