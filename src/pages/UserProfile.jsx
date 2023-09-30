import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { NavBar } from '../components';
import { Box, Grid } from '@mui/material';

const UserProfile = () => {
    const dispatch = useDispatch()

  return (
    <Box className={styles.homepage}>
      <NavBar />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          {/* profile info */}
        </Grid>
        <Grid item xs={6} sx={{ mt: "20px" }}>
       
        </Grid>
        <Grid item xs={3}>
          {/*  person you may know */}
        </Grid>
      </Grid>
      <Outlet />
    </Box>
  );
}
export default UserProfile;