import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { NavBar } from '../components';
import { Box, Grid } from '@mui/material';
import logo from '../images/avatar.png'
const UserProfile = () => {
  
    const dispatch = useDispatch()

  return (
    <Box >
      <NavBar />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          {/* profile info */}
        </Grid>
        <Grid item xs={6} sx={{ mt: "20px" }}>
       <img src={logo}/>
        </Grid>
        <Grid item xs={3}>
          {/*  person you may know */}
        </Grid>
      </Grid>
    </Box>
  );
}
export default UserProfile;