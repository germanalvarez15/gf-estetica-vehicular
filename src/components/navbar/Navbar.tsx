import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import React, { useState } from 'react';
import '../../styles/components/navbar.scss';
const logoImg = require('../../assets/logoWhite.png');


const Navbar = ()=>{
    const [isHamburgerActive, setIsHamburgerActive] = useState(false);

    const onHamburgerClick = () => {
        setIsHamburgerActive(!isHamburgerActive);

    }
    return (
        <nav className="navbar">
            <img src={logoImg} alt='GF Estetica Vehicular' className='logo'/>
            <div className={`hamburger-menu ${isHamburgerActive ? 'active' : ''}`} onClick={onHamburgerClick}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>            
            <div className="links">
                <a className="neon-text" href="/">Nosotros</a>
                <a className="neon-text" href="/create">Proyectos</a>
                <a className="neon-text" href="/create">Agenda</a>
            </div>
            <div className="social-media">
                <a href="https://www.facebook.com/GFEsteticaVehicular/" target="_blank" rel="noreferrer">
                    <FacebookIcon sx={{ color: 'white' }}/>
                </a>
                <a href="https://www.instagram.com/gf.esteticavehicular" target="_blank" rel="noreferrer">
                    <InstagramIcon sx={{ color: 'white' }}/>
                </a>
            </div>
            
        </nav>
    )
}

export default Navbar;