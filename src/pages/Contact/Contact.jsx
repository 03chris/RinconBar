import './Contact.css'
import Logo from '../../assets/LogoWhite.png'
import { Col, Container, Row } from 'react-bootstrap'
import {AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = () => {
    return (
        <Container fluid className="contact" id='contacto'>
            <Row className='contact-container'>
                <Col sm={6} className='text-center'>
                    <img src={Logo} alt="logo"/>
                </Col>
                <Col sm={6}>
                    <h1 className='contact-title'>CONTACTo</h1>
                    <h5 className='correo pt-4'>CORREO<p>info@rincon.com.ar</p></h5>
                    <h6 className='redes pt-2'>REDES</h6>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><span><AiOutlineInstagram/></span></a>
                    <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer"><span><AiOutlineWhatsApp/></span></a>
                </Col>
            </Row>
            <p className='copyright'>Christopher Altamirano © 2022</p>
        </Container>
    )
}

export default Contact