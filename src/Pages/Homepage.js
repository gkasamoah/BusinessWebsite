import React, { useState } from 'react';
import Container from '../components/Homecontainer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg'
const Homepage=()=>{
    return(
        <Container>
           <Header>
            <ul style={{display:'flex',justifyContent:'center'}}>
                <li style={{listStyle:"none"}}><Link to='/about' style={{textDecoration:'none',padding:'10px'}}>ABOUT</Link></li>
                <li style={{listStyle:"none"}}><Link to='/tutorials' style={{textDecoration:'none',padding:'10px'}}>TUTORIALS</Link></li>
                <li style={{listStyle:"none"}}> <Link style={{padding:'10px'}}><img src={logo} alt="Logo images" style={{height:'20px'}}/></Link>  </li>
                <li style={{listStyle:"none"}}><Link to='/bookings' style={{textDecoration:'none',padding:'10px'}}>BOOKINGS</Link></li>
                <li style={{listStyle:"none"}}><Link to='/contact' style={{textDecoration:'none',padding:'10px'}}>CONTACT</Link></li>
            </ul>
            </Header> 

            <div className='container'>
                <div id='Wrapper' className='d-flex justify-content-center'>
                <div>
                 <p style={{color:'white'}}>START YOUR BUSINESS WITH</p>   
                 <p style={{color:'white'}}> OUR EXCLUSIVE DESIGN PACKAGES</p>
                   <p> <a href="#" style={{color:'orangered',textDecoration:'none'}}>Learn More</a> </p>
                 </div>
                 </div>
                               
            </div>
            <div style={{backgroundColor:"gray"}}>
                    <h4 className='text-light'> GRAPHIC DESIGNS</h4>
                    <p>We do Graphic Works  to Individuals, Small Scale Business with Pure quality and refreshing aesthetic.</p>
                    <p>Check Out Our Amazing Designs <a href="#" style={{color:'white'}}>Here</a> </p>
                    <p style={{color:'orangered',fontSize:'20px'}}>GET A 50% PERCENT DISCOUNT</p>
                </div>
        </Container>
    )                                     

}
export default Homepage