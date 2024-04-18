import React from 'react';
import Layout from '../Component/Layout/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
function Contact() {
  return (
    <Layout>
    <Box sx={{my:10,ml:10,"& h4":{fontWeight:"bold"}}}>
      <Typography variant='h4'>Contact My Restaurent</Typography>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem maiores, placeat veritatis nihil culpa cum nobis animi quam id consequuntur in adipisci voluptatibus vero, dolorem veniam, nesciunt sapiente commodi minus.</p>
    </Box>
    <Box sx={{margin:3,width:"600px",ml:"10","@media (max-width:600px)":{
      width:"300px"
    },
    "@media(max-width:637px)":{
      width:"350px"
    }
    }}>
      <TableContainer component={Paper}>
        <Table aria-label="contact table">
           <TableHead>
            <TableRow>
              <TableCell sx={{bgcolor:"black",color:"white"}} align='center'>Contact Detail</TableCell>
            </TableRow>
           </TableHead>



           <TableBody>
            <TableRow>
              <TableCell>
              <SupportAgentIcon sx={{color:'red',pt:1}}/> 9414971315
              </TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
              <EmailIcon sx={{color:'red',pt:1}}/> laddu@gmail.com
              </TableCell>
            </TableRow>

            <TableRow>
            <TableCell>
              <CallIcon sx={{color:'red',pt:1}}/> 6375349671
              </TableCell>
            </TableRow>


           </TableBody>


        </Table>
      </TableContainer>

     
    </Box>
    </Layout>
  );
}

export default Contact;
