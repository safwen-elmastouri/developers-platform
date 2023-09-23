import { useState } from "react";
import styles from "./post.module.css";
import { Box, Container, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
// import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useDispatch } from "react-redux";
import { likedPost,dislikedPost } from "../features/postSlice";
/* import EditPost from "./EditPost";*/
const Post = ({ asked_by, question, likes, date, id }) => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const handleLike = () => {
    dispatch(likedPost(parseInt(id)));
    setLiked(!liked);
  };

  const handleDislike = () => {
   dispatch(dislikedPost(parseInt(id)));
     setLiked(!liked);
 };


  ;
  console.log(liked)
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
          <Typography
            sx={{ marginTop: "-20px", marginLeft: "20px", color: "grey" }}>
            {" "}
            {date}{" "}
          </Typography>
        </Box>
      </Box>
      <p className={styles.question}>{question}</p>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <FavoriteBorderIcon
          onClick={() => handleLike()}
          sx={{
            fontSize: "30px",
            color: "#e0e1dd",
            cursor: "pointer",
            display: liked ? "none" :"flex" ,
          }}
        />
        {liked && (
          <FavoriteIcon onClick={()=>handleDislike()}
            sx={{
              fontSize: "30px",
              color: "#e0e1dd",
              cursor: "pointer",
            }}
          />
        )}
        <p className={styles.likes}> {likes} </p>
        <ChatBubbleRoundedIcon
          sx={{
            color: "#e0e1dd",
            fontSize: "25px",
            marginRight: "20px",
            cursor: "pointer",
          }}
        />
        <SendRoundedIcon
          sx={{
            color: "#e0e1dd",
            fontSize: "25px",
            cursor: "pointer",
            float: "right",
          }}
        />
      </Box>
    </Container>
  );
};
export default Post;
