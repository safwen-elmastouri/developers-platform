import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { publishPost } from "../features/postSlice";

export default function PublishPost() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.fullName);
  const [postContent, setPostContent] = useState({
    id: uuidv4(),
    asked_by: user,
    likes: "0",
    liked: false,
    date: "Now",
    question: "",
    answers: [
      {
        answered_by: "dsqfd",
        answer: "sfqds",
      },
    ],
  });
  const submitPost = (e) => {
    e.preventDefault();
    dispatch(publishPost(postContent));
    setPostContent({ ...postContent, question: "" });
  };

  return (
    <Container
      style={{ backgroundColor: "#1b263b" }}
      container
      sx={{
        padding: "10px 10px",
        borderRadius: "20px",
      }}>
      <Grid item xs={10} sx={{ m: "20px auto auto" }}>
        <Textarea
          minRows={3}
          placeholder="What's happening ?"
          size="md"
          variant="soft"
          value={postContent.question}
          onChange={(e) =>
            setPostContent({ ...postContent, question: e.target.value })
          }
          sx={{ backgroundColor: "#415a77", color: "#FFFF" }}
          endDecorator={
            postContent.question && (
              <InputAdornment
                sx={{ cursor: "pointer", ml: "auto", mb: "1rem" }}>
                <SendIcon onClick={(e) => submitPost(e)} />
              </InputAdornment>
            )
          }
        />
        <Box
          sx={{
            m: "10px",
            paddingLeft: "10px",
            display: "flex",
            justifyContent: "space-evenly",
          }}>
          <Button
            sx={{
              textTransform: "none",
              display: "flex",
              border: "2px solid grey ",
              borderRadius: "25px",
              padding: "5px 20px",
            }}>
            <AddCircleIcon
              color="primary"
              sx={{ paddingRight: "10px", color: "#7678ed" }}
            />
            <Typography sx={{ color: "#e0e1dd" }}>File</Typography>{" "}
          </Button>
          <Input id="file-input" type="file" style={{ display: "none" }} />

          <Button
            sx={{
              display: "flex",
              flexDirection: "row",
              border: "2px solid grey ",
              borderRadius: "25px",
              padding: "5px 20px",
              textTransform: "none",
            }}>
            <InsertPhotoIcon
              color="primary"
              sx={{ paddingRight: "10px", color: "#7678ed" }}
            />
            <Typography sx={{ color: "#e0e1dd" }}>Photo</Typography>
          </Button>
          <Button
            sx={{
              display: "flex",
              flexDirection: "row",
              border: "2px solid grey ",
              borderRadius: "25px",
              textTransform: "none",
              padding: "5px 20px",
            }}>
            <PlayCircleFilledIcon
              color="primary"
              sx={{ paddingRight: "10px", color: "#7678ed" }}
            />
            <Typography sx={{ color: "#e0e1dd" }}>Video</Typography>
          </Button>
        </Box>
      </Grid>
    </Container>
  );
}
