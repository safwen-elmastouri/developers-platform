import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import logo from "../images/avatar.png";
import styles from "./profile-info.module.css";
import EditIcon from "@mui/icons-material/Edit";
export default function ProfileInfo() {
  const [name, setName] = useState("");
  return (
    <>
      <Box container spacing={3} className={styles.container}>
        <EditIcon sx={ { color: "white", marginLeft:"90%",marginTop:"10px"}} />
        <img
          className={styles.profilePicture}
          src={logo}
          alt="profile picture"
        />
        <Box className={styles.infoContainer}>
          <Typography className={styles.info} > Safwen </Typography>
          <Typography className={styles.info} > Web Developer </Typography>
        </Box>
      </Box>
    </>
  );
}
