import React, { Fragment } from 'react'
import { NavBar,PorfileInfo } from '../components';
import { Grid } from '@mui/material';

 const  PostDetails= ()=> {
  return (
    <Fragment>
      <NavBar />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          {/* profile info */}
          <PorfileInfo />
        </Grid>
        <Grid item xs={6} sx={{ marginTop: "20px" }}>
        </Grid>
        <Grid item xs={3}>
          {/*  person you may know */}
        </Grid>
      </Grid>
    </Fragment>
  );
}
export default PostDetails;