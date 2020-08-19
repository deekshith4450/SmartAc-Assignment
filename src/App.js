import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom"
import './App.css';
import About from './About';
import Facts from './Facts';

function App() {
  return (
    <Router>
      <div>
        <div className="header">
          <img className="image-logo" alt="logo" src={require('./media/tx-logo.png')} />
          <p className="title"><b>Texas</b></p>
          <NavLink className="facts" activeClassName="facts-active" to="/facts">Facts</NavLink>
          <NavLink className="about" activeClassName="about-active" to="/about">About</NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/facts">
            <Facts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
