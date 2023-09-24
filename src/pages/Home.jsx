import { Fragment, Suspense, lazy } from "react";
import { NavBar, PublishPost } from "../components";
import styles from "./home.module.css";
import { Box, Grid } from "@mui/material";
import ProfileInfo from "../components/ProfileInfo";
import { useSelector } from "react-redux";
import Loading from "./Loading";
function Home(props) {
  const { post } = useSelector((state) => state);
  const lazyDelay = (promise) => {
    return new Promise((resolve) => {
      setTimeout(resolve, 2500);
    }).then(() => promise);
  };
  const Post = lazy(() => lazyDelay(import("../components/Post")));
  return (
    <Fragment className={styles.homepage}>
      <NavBar />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          {/* profile info */}
          <ProfileInfo />
        </Grid>
        <Grid item xs={6} sx={{ marginTop: "20px" }}>
          <PublishPost />
          <Suspense fallback={<Loading />}>
            {post &&
              post.map((item) => {
                return (
                  <Post
                    asked_by={item.asked_by}
                    id={item.id}
                    date={item.date}
                    question={item.question}
                    likes={item.likes}
                  />
                );
              })}
          </Suspense>
        </Grid>
        <Grid item xs={3}>
          {/*  person you may know */}
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Home;
