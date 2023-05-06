import React from 'react';
import '../../styles/components/navbar.scss';
const logoImg = require('../../assets/logoWhite.png');

const Navbar = ()=>{
    return (
        <nav className="navbar">
            <img src={logoImg} alt='GF Estetica Vehicular' className='logo'/>
            <div className="links">
                <a className="neon-text" href="/">Nosotros</a>
                <a className="neon-text" href="/create">Proyectos</a>
                <a className="neon-text" href="/create">Agenda</a>
            </div>

        </nav>
    )
}

export default Navbar;