import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";

import { Navbar, Feed, SearchFeed, VideoDetail, ChannelDetail } from "./components";


const App = () =>
(
    <BrowserRouter>

        <Box sx={{ backgroundColor: '#000' }}>
            <div style={
                {
                    height:'50px',
                    width:'210px',
                    backgroundColor:'white',
                    position:'fixed',
                    bottom:15,
                    right:5,
                    borderRadius:'10px',
                    textAlign:'center',
                    lineHeight:'50px',
                    fontFamily: 'georgia',
                    
                   
                }
            }>Created By : Aman Bodele &#9829;</div>
            <Navbar />

            <Routes>

                <Route path="/" exact element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/channel/:id" element={<ChannelDetail />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />

            </Routes>
        </Box>

    </BrowserRouter>
);



export default App