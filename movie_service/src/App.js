import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Navigation from './components/Navigation/Navigation';
import './App.css';

function App () {
  return  <HashRouter>
    <Navigation />
    <Route path='/' exact={true} component={ Home } />
    <Route path='/about' component={ About } />
  </HashRouter>
}

export default App;