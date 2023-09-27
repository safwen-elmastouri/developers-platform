import { useEffect, useRef, useState } from "react";
import { NavBar, Post } from "../components";
import styles from "./PostDetails.module.css";
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
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const user = useSelector((state) => state.user.fullName);
  const { id } = location.state;
  const selectedPost = post[id];
  const buttonRef = useRef();

    const scrollBottomRef = useRef(null);
    useEffect(() => {
      if (selectedPost.answers.length) {
        scrollBottomRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
          
        });
      }
    }, [selectedPost.answers.length]);
console.log(post);

  const focus = () => {};

  const blur = () => {
    buttonRef.current.blur();
  };
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
  const SubmitReply = (e) => {
    e.preventDefault();
    dispatch(addRelpy(reply));
    setReply({
      ...reply,
      answer: "",
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
            likes={ selectedPost.likes }
            liked={selectedPost.liked}
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
         
          <form
            className={styles.form}
            onSubmit={ SubmitReply }>
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
                      onClick={(e)=> SubmitReply(e) }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </form>
          <div ref={scrollBottomRef} ></div>
        </Grid>
        <Grid item xs={3}>
          {/*  person you may know */}
        </Grid>
      </Grid>
    </Box>
  );
};
export default PostDetails;
