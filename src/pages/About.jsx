import { Box, Typography } from "@mui/material";
import Layout from "../Component/Layout/Layout";


function About() {
  return (
    <Layout>
    <Box sx={{my:15,textAlign:"center",
        "& h4":{
         fontWeight:"bold"
        },
        "& p":{
          textAlign:"justify",
          fontSize:"1.3rem"
        },
        "@media (max-width:600px)":{
          mt:0,
          "& h4":{
            fontSize:'1.2rem',
            my:2
          }
        }
        }}>
       <Typography variant="h4">
        Welcome to my Restaurent
       </Typography>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur vel voluptas praesentium necessitatibus perspiciatis quidem. Ipsam modi veritatis omnis quia? Unde doloremque laboriosam eaque qui quae esse quia earum veritatis.
       </p>
       <br/>
    </Box>
    </Layout>
  );
}

export default About;
