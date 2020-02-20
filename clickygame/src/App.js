import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      
      <Switch>
        <Route exact path = "/" component = {Main}/>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
