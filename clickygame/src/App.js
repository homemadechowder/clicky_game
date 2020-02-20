import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      
      <Switch>
        <Route exact path = "/" component = {Body}/>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
