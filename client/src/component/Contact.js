import React , {useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import contactImg from "../assets/img/contact-img.svg"

export const Contact = () => {
    const intialFromDetails = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
    }

    const [fromDetails, setFromDetails] = useState(intialFromDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFromUpdate = (category , value) => {
        setFromDetails({
            ...fromDetails,
            [category] : value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText("sending....")
 
        let response = await fetch("http://localhost:5000/contact" , {
         method: "POST",
         headers: {
             "Content-Type": "Application/json;charset=utf-8"
         },
         body: JSON.stringify(fromDetails)
        } )
        setButtonText("send");
        let result = response.json();
        setFromDetails(intialFromDetails)
        if(result.code === 200){
         setStatus({ success: true, massage: "Massage send successfully"  })
        }else {
         setStatus({ success: false , massage: "something went wrong, please try again later."})
        }
     }
  
  return (
    <section className='contact' id='connect' >
            <Container>
                <Row className='align-item-center' >
                    <Col md={6} >
                        <img src={contactImg} alt='Contact Us' />
                    </Col>
                    <Col md={6} >
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit} >
                            <Row>
                                <Col sm={6} className='px-1' >
                                    <input type='text' value={fromDetails.firstname} placeholder='First Name' onChange={(e)=> onFromUpdate("firstname" , e.target.value)} required />
                                </Col>
                                <Col sm={6} className='px-1' >
                                <input type='text' value={fromDetails.lastname} placeholder='Last Name' onChange={(e)=> onFromUpdate("lastname" , e.target.value)} required />
                                </Col>
                                <Col sm={6} className='px-1' >
                                <input type='email' value={fromDetails.email} placeholder='Email' onChange={(e)=> onFromUpdate("email" , e.target.value)} required />
                                </Col>
                                <Col sm={6} className='px-1' >
                                <input type='number' value={fromDetails.phone} placeholder='Number' onChange={(e)=> onFromUpdate("phone" , e.target.value)} required />
                                </Col>
                                <Col sm={6} className='px-1' >
                                <textarea rows={6} value={fromDetails.message} placeholder='Message' onChange={(e)=> onFromUpdate("message" , e.target.value)} required />
                                <button type='submit' ><span>{buttonText}</span></button>
                                </Col> 
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success" } >{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                        
                    </Col>
                </Row>
            </Container>
        </section>
  )
}

