import './NavBar.css'
import Logo from "../../assets/LogoWhite.png"
import { Container, Nav, Navbar} from 'react-bootstrap'
import { HashLink } from "react-router-hash-link"
import { useState } from 'react'
import Bag from '../Bag/Bag'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const NavBar = () => {
    const [background, setBackground] = useState(false);

    const home = useParams()

    const changeBackground = () =>{
        if(window.scrollY > 0 && home){
            setBackground(true);
        }else{
            setBackground(false);
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" fixed="top" className={background ? 'navbar sticky' : 'navbar'}>
            <Container fluid>
                <HashLink className='navbar-brand text-center' to="/#inicio"><img src={Logo} width="100" alt="logo"/></HashLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="text-end">
                        <HashLink className="nav-link" to="/#inicio">Inicio</HashLink>
                        <HashLink className="nav-link" to="/#nosotros">Nosotros</HashLink>
                        <HashLink className="nav-link" to="/#menu">Menú</HashLink>
                        <HashLink className="nav-link" to="/#contacto">Contacto</HashLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
