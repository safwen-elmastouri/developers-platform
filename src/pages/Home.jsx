import { NavBar, PublishPost ,Post } from "../components";
import styles from "./home.module.css";
import {  Box, Grid } from "@mui/material";
import ProfileInfo from "../components/ProfileInfo";
import { useSelector } from "react-redux";
import { Fragment } from "react";
function Home(props) {
  const { post } = useSelector((state) => state);
 
  return (
    <Box className={styles.homepage}>
      <NavBar />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          {/* profile info */}
          <ProfileInfo />
        </Grid>
        <Grid item xs={6} sx={{ marginTop: "20px" }}>
          <PublishPost />
            {post &&
              post.map((item ,index)  => {
                return (
                  <Fragment key={index} >
                  <Post
                    
                    asked_by={item.asked_by}
                    id={item.id}
                    date={item.date}
                    question={item.question}
                    likes={item.likes}
                    />
                    </Fragment>
                );
              })}
        </Grid>
        <Grid item xs={3}>
          {/*  person you may know */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
