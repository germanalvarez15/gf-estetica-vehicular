import Navbar from './components/navbar/Navbar';
import React from 'react';
import './styles/components/app.scss';
import Nosotros from './components/nosotros/Nosotros';

function App() {
  return (
    <div className='app'>
      <div className='img-background kenburns-top'></div>
      <Navbar/>
      <div className='space-between'></div>
          <Nosotros/>
    </div>
  );
}

export default App;
