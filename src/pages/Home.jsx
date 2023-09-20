import { Fragment } from "react";
import { NavBar, PublishPost } from "../components";
import styles from "./home.module.css";
import { Grid } from "@mui/material";
import ProfileInfo from "../components/ProfileInfo";
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
        </Grid>
        <Grid item xs={3}>
          {/*  person you may know */}
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Home;
