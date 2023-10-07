import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { NavBar, Post, PublishPost } from "../components";
import ProfileInfo from "../components/ProfileInfo";
import styles from "../styles/Home.module.css";
function Home(props) {
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  if (user.length === 0) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <Box className={styles.homepage}>
        <NavBar />
        <Grid container spacing={3}>
          <Grid item xs={3}>
            {/* profile info */}
            <ProfileInfo />
          </Grid>
          <Grid item xs={6} sx={{ mt: "20px" }}>
            <PublishPost />
            {post &&
              post.map((item, index) => {
                return (
                  <Post
                    asked_by={item.asked_by}
                    id={index}
                    date={item.date}
                    question={item.question}
                    likes={item.likes}
                    liked={item.liked}
                  />
                );
              })}
          </Grid>
          <Grid item xs={3}>
            {/*  person you may know */}
          </Grid>
        </Grid>
        <Outlet />
      </Box>
    );
  }
}

export default Home;
