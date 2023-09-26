import { useRef, useState } from "react";
import { NavBar, Post } from "../components";
import styles from "./post-details.module.css";
import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addRelpy } from "../features/postSlice";
const PostDetails = () => {
  const location = useLocation();
  const post = useSelector((state) => state.post);
  const user = useSelector((state) => state.user.fullName);

  const { id } = location.state;
  const selectedPost = post[id];
  const dispatch = useDispatch();
  const buttonRef = useRef();

  const focus = () => {};

  const blur = () => {
    buttonRef.current.blur();
  };
  const [checkReply, setCheckReply] = useState(null);
  const [reply, setReply] = useState({
    id: id,
    answered_by: user,
    answer: "",
  });

  const handleReply = (e) => {
    e.preventDefault();
    setReply({
      ...reply,
      answer: e.target.value,
    });
  };
  return (
    <Box className={styles.homepage}>
      <NavBar />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          {/* profile info */}
        </Grid>
        <Grid item xs={6}>
          <Post
            asked_by={selectedPost.asked_by}
            date={selectedPost.date}
            question={selectedPost.question}
            id={id}
            likes={selectedPost.likes}
          />

          <Container
            sx={{
              backgroundColor: "#1b263b",
              borderRadius: "25px",
              minHeight: "50%",
            }}>
            {selectedPost.answers.map((comment, index) => {
              return (
                <Box key={index}>
                  <Typography className={styles.user}>
                    {comment.answered_by}
                  </Typography>
                  <Typography className={styles.answer}>
                    {" "}
                    {comment.answer}{" "}
                  </Typography>
                  <Button
                    ref={buttonRef}
                    id={styles.button}
                    onClick={() => buttonRef.current.focus()}>
                    Reply
                  </Button>
                </Box>
              );
            })}
          </Container>

          <Box
            sx={{
              backgroundColor: "#1b263b",
              borderRadius: "25px",
              marginTop: "10px",
              display: "flex",
            }}>
            <TextField
              ref={buttonRef}
              value={reply.answer}
              type="text "
              placeholder="Comment here ..."
              onChange={handleReply}
              sx={{
                borderRadius: "25px",
                backgroundColor: "#415a77",
                color: "#FFFF",
                width: "100%",
              }}
              InputProps={{
                endAdornment: reply && (
                  <InputAdornment position="end">
                    <SendIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => dispatch(addRelpy(reply))}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          {/*  person you may know */}
        </Grid>
      </Grid>
    </Box>
  );
};
export default PostDetails;
