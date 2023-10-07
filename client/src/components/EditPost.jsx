import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "../features/postSlice";
import { TextField } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
  backgroundColor: "#1b263b",
};

const EditPost = ({ open, handleClose, id }) => {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography
          sx={{ color: "#e0e1dd" }}
          id="modal-modal-title"
          variant="h6"
          component="h2">
          Edit post
        </Typography>
        <TextField
          minRows={3}
          defaultValue={post.post[id].question}
          name="post"
          size="md"
          variant="soft"
          sx={{ backgroundColor: "#415a77", color: "#FFFF" }}
        />

        <Button
          id="btn"
          variant="contained"
          onClick={() => dispatch(editPost(id))}
          style={{
            width: "120px",
            textTransform: "none",
            backgroundColor: "#415a77",
          }}>
          Edit
        </Button>
      </Box>
    </Modal>
  );
};

export default EditPost;
