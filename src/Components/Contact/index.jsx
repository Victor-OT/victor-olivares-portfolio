import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import './Contact.css'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Contact () {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState ({})

    const onFormUpdate = (category, value) => {
        setFormDetails({...formDetails, [category]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setButtonText('Sending...')
        let response = await fetch('https://portfolio-backend-ry0z.onrender.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json;charset=utf-8',
                'Access-Control-Allow_origin': '*'
            },
            mode:'cors',
            body: JSON.stringify(formDetails)
        })
        setButtonText('Send')
        let result = await response.json()
        setFormDetails(formInitialDetails)
        if (result.code === 200){
            setStatus({succes: true, message: 'Message sent succesfully'})
        } else {
            setStatus({succes: false, message: 'Something went wrong, please try again later'})
        }
    }

    return (
        <section className="contact" id='contact'>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <TrackVisibility>
                            {({isVisible}) => (
                                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                                    <img src="/contact-img.svg" alt="contact" />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit} id='contact'>
                            <Row>
                                <Col sm={6}>
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" 
                                        onChange={(event) => onFormUpdate('firstName', event.target.value)}/>
                                </Col>
                                <Col sm={6}>
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" 
                                        onChange={(event) => onFormUpdate('lastName', event.target.value)}/>
                                </Col>
                                <Col sm={6}>
                                    <input type="email" value={formDetails.email} placeholder="Email Address" 
                                        onChange={(event) => onFormUpdate('email', event.target.value)}/>
                                </Col>
                                <Col sm={6}>
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." 
                                        onChange={(event) => onFormUpdate('phone', event.target.value)}/>
                                </Col>
                                <Col>
                                    <textarea row={6} value={formDetails.message} placeholder="Message" 
                                        onChange={(event) => onFormUpdate('message', event.target.value)} ></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                    {
                                        status.message &&
                                        <Col>
                                            <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                        </Col>
                                    }   
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export {Contact} 