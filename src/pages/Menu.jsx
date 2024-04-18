
import Layout from '../Component/Layout/Layout';
import { MenuList } from '../Component/Data/Data';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';


function Menu() {
  return (
    <Layout>
      <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {MenuList.map(menu=>(
          <Card key={menu.price} sx={{maxWidth:"390px",display:"flex",m:2}}>
            <CardActionArea>
              <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image}/>
              <CardContent>
                <Typography variant='h5' gutterBottom component={'div'}>
                  {menu.name}
                </Typography>
                <Typography variant='body'>
                  {menu.discripstion}
                </Typography>
              </CardContent>
             </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
}

export default Menu;
