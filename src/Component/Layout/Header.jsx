
import {AppBar, Box, Divider, Drawer, IconButton, Link, Toolbar, Typography} from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import "../../Style/HeaderStyle.css"
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
function Header() {
    const [mobbileOpen,setMobbileOpen] = useState(false)
    
    const handleDrawerToggle = () =>{
        setMobbileOpen(!mobbileOpen)
    }
      const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
         <Typography color={'goldenrod'} variant='h6' component="div" sx={{flexGrow:1,my:2}}>
        <FastfoodIcon/> 
             My RestauRent 
             </Typography>
             <Divider/>
           
             <ul className='mobbile-menu'>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/menu"}>menu</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
               <li><NavLink to={"/Contact"}>Contact</NavLink></li>
             </ul>
          
        </Box>
      )

  return (
    <Box>
    <AppBar component={'nav'} sx={{bgcolor:"black"}} >
        <Toolbar>
          <IconButton color='inherit'aria-label='open drawer' edge="start" sx={{mr:2,display:{sm:"none"}}} onClick={handleDrawerToggle}>
             <MenuIcon />
            </IconButton>        
        <Typography color={'goldenrod'} variant='h6' component="div" sx={{flexGrow:1}}>
        <FastfoodIcon/> 
             My RestauRent 
             </Typography>
           <Box sx={{display:{ xs:"none",sm:"block"}}}>
             <ul className='navigation-menu'>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/menu"}>menu</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
               <li><NavLink to={"/Contact"}>Contact</NavLink></li>
             </ul>
           </Box>
        </Toolbar>
    </AppBar>
    <Box component="nav">
      <Drawer variant='temporary' open={mobbileOpen} anchor="right" onClose={handleDrawerToggle} 
      sx={{display:{xs:"block",sm:"none"},width:"200px","& .MuiDrawer-paper":{boxSizing:"border-box",width:"240px"}}} >
       {drawer}
      </Drawer>
    </Box>
    <Box>
        <Toolbar/>
    </Box>
    
   </Box>
  );
}

export default Header;

