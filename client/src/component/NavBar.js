import React from 'react';
import { useState , useEffect } from 'react'; 
import { Nav , Navbar, Container} from 'react-bootstrap';
import logo from '../assets/img/logo.svg' ;
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
          <Navbar.Brand href="#home">
            <img src={logo} alt='Logo'   />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'   ></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activelink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')} >Home</Nav.Link>
              <Nav.Link href="#skills" className={activelink === 'skills' ? 'active navbar-link' : 'navbar-link' } onClick={()=>onUpdateActiveLink('skills')}  >Skills</Nav.Link>
              <Nav.Link href="#projects" className={activelink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')} >Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='#javascript'><img src={navIcon1} alt='' /></a>
                    <a href='#javascript'><img src={navIcon2} alt='' /></a>
                    <a href='#javascript'><img src={navIcon3} alt='' /></a>
                </div>
                <button className='vvd' onClick={()=>console.log("Connect")} ><span>Let's Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
    )
}