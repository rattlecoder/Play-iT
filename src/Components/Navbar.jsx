import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
//import {logo} from '../utils/constants';

import logo from '../Images/play-button.png';

import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack direction="row" alignIems="center" p={2} sx={{position:'sticky', backgrount:'#000', top:0, justifyContent:'space-between'}}>
    <Link to="/" style={{ display:'flex', alignItems:'center'}}>
      <img src={logo} alt="logo" height={50} />
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}} >
       <span style={{color:'#FC1503'}}> Play-IT </span>
      </Typography>
    </Link>
    <SearchBar/>
  </Stack>
);

export default Navbar
