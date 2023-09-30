import { useState } from "react";
import styles from "./Post.module.css";
import { Box, Container, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
// import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useDispatch } from "react-redux";
import { likedPost, dislikedPost } from "../features/postSlice";
import { useNavigate } from "react-router-dom";

/* import EditPost from "./EditPost";*/
const Post = (props) => {
  const { asked_by, question, likes, date, id, liked } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLike = () => {
    dispatch(likedPost(id));
  };

  const handleDislike = () => {
    dispatch(dislikedPost(id));
  };

  const goToPostPage = () => {
    navigate("/post", { state: { id } });
  };
  return (
    <Container className={styles.container}>
      {/*  <ModeEditIcon
        onClick={() => setOpen(true)}
        style={{ float: "right", color: "#e0e1dd", cursor: "pointer" }}
      />
      {open && <EditPost open={open} handleClose={() => setOpen(false)} id={id}/>} */}
      <Box className={styles.asked}>
        <AccountCircle
          sx={{
            color: "white",
            fontSize: "45px",
            cursor: "pointer",
          }}
        />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
          <p className={styles.user}> {asked_by}</p>
          <Typography sx={{ mt: "-20px", ml: "20px", color: "grey" }}>
            {" "}
            {date}{" "}
          </Typography>
        </Box>
      </Box>
      <p className={styles.question}>{question}</p>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FavoriteBorderIcon
            onClick={() => handleLike()}
            sx={{
              fontSize: "30px",
              minWidth: "65px",

              color: "#e0e1dd",
              cursor: "pointer",
              display: liked ? "none" : "flex",
            }}
          />
          {liked && (
            <FavoriteIcon
              onClick={() => handleDislike()}
              sx={{
                minWidth: "65px",
                fontSize: "30px",
                color: "#e0e1dd",
                cursor: "pointer",
              }}
            />
          )}
          <p className={styles.likes}> {likes} </p>
        </Box>
        <ChatBubbleRoundedIcon
          onClick={() => goToPostPage()}
          sx={{
            color: "#e0e1dd",
            fontSize: "30px",
            mr: "20px",
            cursor: "pointer",
          }}
        />
        <SendRoundedIcon
          sx={{
            color: "#e0e1dd",
            fontSize: "30px",
            cursor: "pointer",
            float: "right",
          }}
        />
      </Box>
    </Container>
  );
};
export default Post;
