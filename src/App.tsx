import Navbar from './components/navbar/Navbar';
import React from 'react';
import './styles/components/app.scss';
import Nosotros from './components/nosotros/Nosotros';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function App() {
  return (
    <div className='app'>
      <div className='img-background kenburns-top'></div>
      <Navbar/>
      <div className='space-between'></div>
      <Nosotros/>
      <a href="http://wa.me/+59895057621" target="_blank" rel="noreferrer">
        <WhatsAppIcon sx={{ color: 'white', backgroundColor: '#25D366', fontSize: 40, position: 'fixed', bottom: '10px', right: '10px',borderRadius: '30px', padding: '10px' }}/>
      </a>
    </div>
  );
}

export default App;
