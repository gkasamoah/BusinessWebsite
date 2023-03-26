import React from 'react';
import Container from '../components/Homecontainer';
import logo from '../images/logo.jpg'
import 'animate.css' 
import LandingPage from '../assets/Landingpage.css'
import { Link,Outlet } from 'react-router-dom';
 import {Routes,Route} from 'react-router-dom'
import {BsArrowDown}   from 'react-icons/bs';
import Homepage from './Homepage';
const Landingpage=()=>{
    return(
        <div>
            <Container id='landingPage' >
            <a href="#"><img src={logo} style={{height:'30px'}} alt=''/> </a> 
                <div style={{backgroundColor:'darkGray',width:'100%'}} className='d-flex justify-content-center' >
                <p style={{color:'white',fontSize:'60px'}} className='animate__animated animate__slideInLeft animate__slow animate__infinite'>Welcome To Link Technologies</p>

                </div>
                 <p id='landingText'  style={{color:'white',textAlign:'center',color:'orangered',paddingTop:'90px',fontSize:'50px'}}>We Build Softwares, Engaging Graphic designs and Tutorials</p>

                 <p className='d-flex justify-content-center text-light' style={{padding:'60px',fontSize:'30px'}}> 
                    Find Out About our Service Offerings </p>
                     <p className='d-flex justify-content-center'>   <BsArrowDown style={{color:'orangered',height:'40px'}} /> </p> 

                    <p className='d-flex justify-content-center' style={{padding:'60px'}}>  
                     
                   <button type="submit" style={{backgroundColor:"orangered"}}> Click Here </button>  </p>
                   
                       
                   

            </Container>
           <Routes>
             <Route path='Homepage' element={<Homepage/>}></Route>
           </Routes>
        </div>
           
        
    )
}
export default Landingpage