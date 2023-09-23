import { Fragment } from "react";
import { NavBar, Post, PublishPost } from "../components";
import styles from "./home.module.css";
import { Box, Grid } from "@mui/material";
import ProfileInfo from "../components/ProfileInfo";
import { useSelector } from "react-redux";
function Home(props) {
  const {post} = useSelector((state) => state);
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

           { post&& post.map(( item) => {
             return (
               <Post
                 asked_by={ item.asked_by }
                 id={item.id}
                 date={item.date}
                 question={ item.question }
               likes={item.likes}/>
             )
             
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
