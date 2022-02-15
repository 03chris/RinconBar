import './Footer.css'
import Logo from '../../assets/LogoWhite.png'

const Footer = () => {
    return (
        <div className="footer">
            <img src={Logo} alt="logo"/>
            <p>Christopher Altamirano © 2022</p>
        </div>
    )
}

export default Footer