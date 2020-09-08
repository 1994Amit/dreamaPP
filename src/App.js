import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import dreams from "./components/dreams";
import Createdreams from "./components/create";
import details from "./components/Details"

function App() {
 
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
         
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
           <center> <h3>Dreamzz</h3></center>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/dreams"}>HomePage</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/dreams/create"}>Add your Dreamz</Link>
              </li>
              
            </ul>
          </div>
          
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={dreams} />
            <Route exact path="/dreams" component={dreams} />
            <Route exact path="/dreams/create" component={Createdreams} />
            <Route exact path="/dreams/:id" component={details} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;