import './NavBar.css'
import Logo from "../../assets/LogoWhite.png"
import { Container, Nav, Navbar} from 'react-bootstrap'
import { HashLink } from "react-router-hash-link"
import { useState } from 'react'

const NavBar = () => {
    const [background, setBackground] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY > 0){
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
