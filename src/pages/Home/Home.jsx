import './Home.css'
import { HashLink } from 'react-router-hash-link' 

import About from '../About/About'
import Menu from '../Menu/Menu'
import Comment from '../Comment/Comment'
import Contact from '../Contact/Contact'

const Home = () => {
    return (
        <>
            <div className="main-container" id='inicio'>
                <div className="container-fluid gx-0">
                    <div className="background-container d-flex align-items-center justify-content-center flex-column">
                        <p className='text-center'>DESCUBRÍ TU ESTILO</p>
                        <HashLink className="button-home" to="/#nosotros">¡DESCUBRÍ RINCON!</HashLink>
                    </div>
                </div>
            </div>
            <About/>
            <Menu/>
            <Comment/>
            <Contact />
        </>
    )
}

export default Home