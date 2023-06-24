import React from 'react';
import "@fontsource/roboto-condensed";
import '../../styles/components/nosotros.scss';
const nosotrosImg = require('../../assets/nosotros.jpg');
const Nosotros = () => {
    return (
        <section id="nosotros" >
            <h2>Nosotros</h2>
            <div className="content">
                <img src={nosotrosImg} alt="Nosotros"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Ipsa, voluptate. Quasi, quisquam. Ipsa, voluptate. Quasi, quisquam</p>
            </div>
            
        </section>
    )
}

export default Nosotros;