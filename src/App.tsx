import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
