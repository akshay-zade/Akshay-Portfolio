import React from 'react';
import { useState , useEffect } from 'react'; 
import { Nav , Navbar, Container} from 'react-bootstrap';
import logo from '../assets/img/logo.svg' ;
//import Rlogo from '../assets/img/arkesnhu.jpg'
import navIcon1 from '../assets/img/nav-icon1.svg' ;
import navIcon2 from '../assets/img/nav-icon2.svg' ;
import navIcon3 from '../assets/img/nav-icon3.svg' ;



export const NavBar  = ()=> {

const [activelink , setActiveLink] = useState('home') ;
const [scolled , setScrolled] = useState(false);

useEffect(()=> {
    const onscroll = () => {
        if(window.scrollY > 50){
            setScrolled(true)
        }else {
            setScrolled(false)
        }
    }
    window.addEventListener("scroll" , onscroll) ;

    return () => window.removeEventListener("scroll" , onscroll)
},[])

const onUpdateActiveLink = (value) => {
   setActiveLink(value)
}

    return(
      
         <Navbar  className={scolled ? "scolled": "" } >
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt='Logo'   />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'   ></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activelink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')} >Home</Nav.Link>
              <Nav.Link href="#skills" className={activelink === 'skills' ? 'active navbar-link' : 'navbar-link' } onClick={()=>onUpdateActiveLink('skills')}  >Skills</Nav.Link>
              <Nav.Link href="#projects" className={activelink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')} >Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/akshay-zade-124925244/'><img src={navIcon1} alt='' /></a>
                    <a href='https://www.facebook.com/akshay.zade.714/'><img src={navIcon2} alt='' /></a>
                    <a href='https://www.instagram.com/akshay_zade_21/'><img src={navIcon3} alt='' /></a>
                </div>
             <a href='#connect' > <button className='vvd' href="#connect"  onClick={()=>console.log("Connect")} ><span>Let's Connect</span></button></a>  
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
           
  
    )
}