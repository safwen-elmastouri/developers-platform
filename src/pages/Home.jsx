import { Fragment, useContext } from "react";
import { NavBar, PublishPost } from "../components";
import styles from "./home.module.css";
import { GlobalContext } from "../context/GlobalState";
import { Button, Grid } from "@mui/material";
function Home(props) {
  const { user } = useContext(GlobalContext);
  console.log(user);

  return (
    <Fragment className={styles.homepage}>
      <NavBar />

      <Grid container spacing={1}>
        <Grid item xs={3}>
          {/* profile info */}
        
        </Grid>
        <Grid item xs={6}>
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
