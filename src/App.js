import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Box} from '@mui/material';

import { Navbar, Feed, SearchFeed, VideoDetail, ChannelDetail } from './Components';

const App = () => (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000'}}>
        <Navbar />
        <Routes>
            <Route path = "/" exact element = {<Feed/>} />
            <Route path = "/video/:id" exact element = {<VideoDetail/>} />
            <Route path = "/channel/:id" exact element = {<ChannelDetail/>} />
            <Route path = "/search/:searchItem" exact element = {<SearchFeed/>} />
        </Routes>
      </Box> 
    </BrowserRouter>  
);

export default App;
