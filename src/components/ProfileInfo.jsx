import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import logo from "../images/avatar.png";
import styles from "./profile-info.module.css";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";

export default function ProfileInfo() {
  const user = useSelector((state) => state.user);
  console.log(user)

  return (
    <>
      <Box container spacing={3} className={styles.container}>
        <EditIcon
          sx={{ color: "white", marginLeft: "90%", marginTop: "10px" }}
        />
        <img
          className={styles.profilePicture}
          src={logo}
          alt="profile picture"
        />
        <Box className={styles.infoContainer}>
          <p className={styles.info}> {  user.fullName} </p>
          <p className={styles.info}> Web Developer </p>
        </Box>
      </Box>
    </>
  );
}
