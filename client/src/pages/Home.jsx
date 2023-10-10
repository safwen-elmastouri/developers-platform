import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { NavBar, Post, PublishPost } from "../components";
import ProfileInfo from "../components/ProfileInfo";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { fetchPosts } from "../features/postSlice";
import Loading from "./Loading";
function Home(props) {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  const user = useSelector((state) => state.user);
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
            {post.isLoading ? (
              <Loading />
            ) : (
              post.post &&
              post.post.map((item, index) => {
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
              })
            )}
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
