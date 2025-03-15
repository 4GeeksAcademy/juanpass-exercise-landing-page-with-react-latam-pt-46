import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Cards from './components/Cards';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
    <Navbar/>
    <Banner/>
    <div>
    <Cards/>    <Cards/>    <Cards/>    <Cards/>
    </div>
   
  </React.StrictMode>,
)
