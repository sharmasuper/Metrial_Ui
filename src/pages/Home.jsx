import React from 'react';
import Layout from '../Component/Layout/Layout';
import { Link } from 'react-router-dom';
import Banner from "../Images/istockphoto-1457979959-1024x1024.jpg"
import '../Style/HomeStyle.css'
function Home() {
  return (
    <Layout>
   <div className='home' style={{backgroundImage:`url(${Banner})`,backgroundSize:"cover",backgroundPosition:"center"}}>
    
    <div className='headercontainer'>
      <h1>Food Website</h1>
      <p>Best Food In India</p>
      <Link to="/menu"> 
      <button>Order Now</button>
      </Link>
    </div>
    </div>
    </Layout>
  );
}

export default Home;
