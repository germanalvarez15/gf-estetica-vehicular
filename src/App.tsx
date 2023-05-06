import Navbar from './components/navbar/Navbar';
import React from 'react';
import './styles/components/app.scss';

function App() {
  return (
    <div className='app'>
      <div className='img-background kenburns-top'></div>
      <Navbar/>
    </div>
  );
}

export default App;
