import './About.css'
import { Col, Container, Row } from 'react-bootstrap'
import Mix from "../../assets/menu/mix.jpg"

const About = () => {
    return (
        <div className='about' id='nosotros'>
            <h1 className="title-about" style={{marginTop: '100px'}}>Nosotros</h1>
            <Container>
                <Row>
                    <Col sm={6} className="text-about">
                        <p className='opacity-50 mb-2'>De juntadas con amigos para tomar unos tragos, a crear una propuesta de comida rapida al paso.</p>
                        <p className='mb-2'>Así es como en el 2016 nace RINCON. Hoy cuenta con 7 locales en Argentina. Como si esto fuera poco, en el 2019, llegamos a Europa con un local en Paris. El primero de 4 locales con aperturas programadas para el proximo año en otras ciudades europeas.</p> 
                        <p className='opacity-50 mb-2'>Nuestra obsesión: superar siempre las expectativas del cliente, llevando un producto de calidad a un formato simple y descontracturado.</p>
                        <p>Así tambien, con nuestro equipo, trabajamos con perseverancia, con creatividad y con toda la pasión para ser de las mejores opciones para vos.</p>
                    </Col>
                    <Col sm={6}>
                        <img src={Mix} alt="Bar" className="img-about" width={450}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
