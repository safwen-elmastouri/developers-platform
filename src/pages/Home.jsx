import { NavBar, PublishPost, Post } from "../components";
import styles from "./Home.module.css";
import { Box, Grid } from "@mui/material";
import ProfileInfo from "../components/ProfileInfo";
import { useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
function Home(props) {
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  console.log(post)
  if (user.length == 0) {
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
                  <Fragment key={index}>
                    <Post
                      asked_by={item.asked_by}
                      id={item.id}
                      date={item.date}
                      question={item.question}
                      likes={item.likes}
                      liked={item.liked}
                    />
                  </Fragment>
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
