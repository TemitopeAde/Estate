import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PropertyDetails from './pages/ProductDetails';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/property/:id" children = {<PropertyDetails />}>
        
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
