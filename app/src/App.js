import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


function App() {
  
  //Right click preventer
  useState(() => {
    library.add(fab)
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    },false)
  },[])
  return (
    
    <Home />
    
  );
}

export default App;
