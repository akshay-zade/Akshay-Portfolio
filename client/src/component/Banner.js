import React from 'react'
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const isRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 300);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta);
    return () => {
      clearInterval(ticker)
    };
  }, [text])

  const tick = () => {
    let i = loopNum % isRotate.length;
    let fullText = isRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
    setText(updatedText);

    if (isDeleting) {
      setDelta(preDelta => preDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);

    }

  }

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-item-center'>
          <Col xs={12} md={6} xl={7} >
            <TrackVisibility>
            {({isVisible})=>
                <div  className={isVisible ? "animate__animated animate__fadeIn" : ""} >
                <span className='tagline' >Welcome to my Portfolio</span>
                <h1>{`Hi I'm Akshay Zade `}<span className='wrap'>{text}</span></h1>
                <p>A Full Stack Web Developer is a professional who possesses expertise in both front-end and back-end development, enabling them to work on all aspects of web application development. </p>
                <a href='#connect' > <button  onClick={() => console.log("connect")} >Let's connect <ArrowRightCircle size={25} /> </button></a>  
              </div>
            }
             
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} >
            <img src={headerImg} alt='header-logo' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

