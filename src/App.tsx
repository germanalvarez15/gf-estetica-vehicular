import React from 'react';
import Navbar from './components/navbar/Navbar';
import './styles/components/app.scss';
import Nosotros from './components/nosotros/Nosotros';
import Servicios from './components/servicios/Servicios';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Footer from './components/footer/Footer';
function App() {
  const [menuHamburguesaState, setMenuHamburguesaState] = React.useState(false);

  const handleMenuHamburguesa = (newState:boolean) => {
    setMenuHamburguesaState(!newState);
    document.body.style.overflowY = newState ? 'visible' : 'hidden';
  }
  
  return (
    <div className='app' >
      <Navbar onMenuHamburguesaChange={handleMenuHamburguesa}/>
      <section className='intro'>
        {!menuHamburguesaState && <div className='intro-info'>
          {/* <img className='intro-info-img flicker-1' src={logo2} alt='GF Estetica Vehicular'/> */}
          <div className='intro-info-text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro odio suscipit harum eos reprehenderit aperiam similique nostrum eius, quod earum fuga et rerum magnam eaque accusantium quam nesciunt ipsam quibusdam! 
          </div>

        </div>}
        <div className='img-background kenburns-top'></div>

      </section>
      <Nosotros/>
      <Servicios/>
      <a href="http://wa.me/+59895057621" target="_blank" rel="noreferrer">
        <WhatsAppIcon sx={{ color: 'white', backgroundColor: '#25D366', fontSize: 40, position: 'fixed', bottom: '75px', right: '20px',borderRadius: '30px', padding: '10px', zIndex: 99 }}/>
      </a>
      <Footer/>
    </div>
  );
}

export default App;
