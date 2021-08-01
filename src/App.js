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
      <Router>
       <main>
      
       <NavBar />
       
     
      <Switch>
       <Route path="/Home">
       <Home />
       </Route>
     </Switch>

     <Switch>
       <Route path="/Services">
       <Services />
       </Route>
     </Switch>
     
     <Switch>
       <Route path="/Transfer">
       <Transfer />
       </Route>
     </Switch>
     
     <Switch>
       <Route path="/Contact">
       <Contact />
       </Route>
     </Switch>
     
     <Switch>
       <Route path="/Sign up">
       <Sign up />
       </Route>
     </Switch>
     <Switch>
       <Route path="/">
      
       </Route>
     </Switch>
     
     < TourList />
     <Footer />
     </main>
     
     </Router> 
    )
  
}
}

export default App;
