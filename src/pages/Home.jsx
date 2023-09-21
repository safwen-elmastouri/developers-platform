import { Fragment } from "react";
import { NavBar, Post, PublishPost } from "../components";
import styles from "./home.module.css";
import { Grid } from "@mui/material";
import ProfileInfo from "../components/ProfileInfo";
import questions from "../data/questions.json";

function Home(props) {

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

          { questions.map((item) =>
          {
            return(<Post asked_by={ item.asked_by }
          question={item.question}
            />)
           

}) }

        </Grid>
        <Grid item xs={3}>
          {/*  person you may know */}
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Home;
