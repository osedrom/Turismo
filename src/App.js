import React, { Component } from 'react';
import './App.scss';

import TourList from './Componentes/tours/TourList';
 import Tours from './Componentes/tours/Tours';
import NavBar from './Componentes/navbar/NavBar';


import Footer from './Componentes/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Componentes/navbar/pages/Home';
import Services from './Componentes/navbar/pages/Services';
import Transfer from './Componentes/navbar/pages/Transfers';
import Contact from './Componentes/navbar/pages/Contact';
import Sign  from './Componentes/navbar/pages/Sign';



class App extends Component {
  render() {
    return (
      
     
       <main>
      
       <NavBar />
       
     
      
       
       <Home />
       
     

     
       
       <Services />
      
     
     
     
       
       <Transfer />
      
    
     
     
       
       <Contact />
      
    
     
     
       
       <Sign up />
      
    
     
       
      
      
     
     
     < TourList />
     <Footer />
     </main>
     
    
    )
  
}
}

export default App;
