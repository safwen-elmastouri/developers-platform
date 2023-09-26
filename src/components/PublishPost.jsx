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

export default function PublishPost() {
  const [postContent, setPostContent] = useState(null);
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
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          sx={{ backgroundColor: "#415a77", color: "#FFFF" }}
          endDecorator={
            postContent && (
              <InputAdornment
                sx={{ cursor: "pointer", ml: "auto", mb: "1rem" }}>
                <SendIcon />
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
