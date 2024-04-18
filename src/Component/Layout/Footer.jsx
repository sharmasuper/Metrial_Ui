import { Box, Typography } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <>
     <Box sx={{textAlign:"center",bgcolor:"#1A1A19",color:"white",p:3,"@media(max-width:600px)":{p:2}}}>
        <Box sx={{"& svg":{fontSize:"60px",mx:1},
        "& svg:hover":{color:"goldenrod",transform:"translateX(5px)",
        transition:'all 400ms' },"@media(max-width:600px)":{"& svg":{fontSize:"40px"}} }}>
            {/* icons */}
           <GitHubIcon/>
            <CloseIcon/>
           <InstagramIcon/>
           <YouTubeIcon/>
        </Box>
        <Typography variant='h5' sx={{"@media(max-width:600px)":{fontSize:'1rem'}}}>
            All Right Reserved
        </Typography>
     </Box>
    </>
  );
}

export default Footer;
