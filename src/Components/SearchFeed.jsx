import React, {useState, useEffect} from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const searchTerm = useParams();

  const item = searchTerm.searchItem;

  useEffect(() => {
    //setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${item}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);

  return (
     <Box p={2} sx={{overflowY: 'auto', height:'90vh', flex:2}}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}} >
       Search results for
       <span style={{color:'#FC1503'}}> {searchTerm.searchItem} </span> videos 
      </Typography>
      <Videos videos={videos} />
     </Box>
  )
}

export default SearchFeed
