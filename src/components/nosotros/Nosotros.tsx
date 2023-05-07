import React from 'react';
import "@fontsource/roboto-condensed";
import '../../styles/components/nosotros.scss';
const nosotrosImg = require('../../assets/nosotros.jpg');
const Nosotros = () => {
    return (
        <section id="nosotros" >
            <h2>Nosotros</h2>
            <img src={nosotrosImg} alt="Nosotros"/>
        </section>
    )
}

export default Nosotros;