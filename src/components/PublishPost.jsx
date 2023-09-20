import React from "react";
import { Box, Button, Grid } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
export default function PublishPost() {
  return (
    <>
      <Grid
        style={{ backgroundColor: "#1b263b" }}
        container
        spacing={1}
        sx={{
          padding: "10px 10px",
          borderRadius: "20px",
        }}>
        <Grid item xs={10} sx={{ margin: "auto auto" }}>
          <Textarea
            color="red"
            minRows={2}
            placeholder="What's happening ?"
            size="md"
            variant="soft"
            sx={{ backgroundColor: "#415a77" }}
          />

          <Box
            sx={{
              display: "flex",
              margin: "10px",
              justifyContentontent: "flex-end",
              alignItems: "center",
            }}>
            <Box sx={{ marginRight: "auto", paddingLeft: "10px" }}>
              <AddCircleIcon color="primary" sx={{ paddingRight: "10px" }} />
              <InsertPhotoIcon color="primary" sx={{ paddingRight: "10px" }} />
              <InsertLinkIcon color="primary" sx={{ paddingRight: "10px" }} />
            </Box>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Button
                type="submit"
                id="btn"
                variant="outlined"
                style={{
                  textTransform: "none",
                  marginRight: "10px",
                  height: "30px",
                  width: "100px ",
                }}>
                Draft
              </Button>
              <Button
                type="submit"
                id="btn"
                variant="contained"
                style={{
                  width: "120px",
                  textTransform: "none",
                  backgroundColor: "#415a77",
                }}>
                Post now
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
