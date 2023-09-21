import React from "react";
import styles from "./post.module.css";
import { Box, Grid } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
const Post = ({ asked_by, question }) => {
  return (
    <Box className={styles.container}>
      <ModeEditIcon style={{ float: "right", color: "#e0e1dd" }} />
      <Box className={styles.asked}>
        <AccountCircle
          sx={{
            color: "white",
            fontSize: "45px",
          }}
        />
        <p className={styles.user}> {asked_by}</p>
      </Box>
      <p className={styles.question}>{question}</p>
      <FavoriteBorderIcon
        sx={{ fontSize: "30px", marginRight: "20px", color: "#e0e1dd" }}
      />
      <ChatBubbleRoundedIcon
        sx={{ color: "#e0e1dd", fontSize: "25px", marginRight: "20px" }}
      />
      <SendRoundedIcon sx={{ color: "#e0e1dd", fontSize: "25px" }} />
    </Box>
  );
};
export default Post;
