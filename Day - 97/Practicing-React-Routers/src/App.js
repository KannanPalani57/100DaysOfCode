import React from 'react';

import {Route, Switch, NavLink} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
          <section className = "Nav-bar">    
             <h3>Cricket Accessories</h3>     
             <NavLink activeClassName = "active-link"className = "link" to = "/cricket/bats/mrf-bat">MRF Bat</NavLink>
             <NavLink activeClassName = "active-link" className = "link" to = "/cricket/bats/ss-Bat">SS Bat</NavLink>
             <NavLink activeClassName = "active-link" className = "link" to = "/cricket/bats/gm-Bat">GM Bat</NavLink>
             <NavLink activeClassName = "active-link" className = "link" to = "/cricket/bats/sg-Bat">SG Bat</NavLink>

             </section>
             <Switch>
         <Route exact path = "/" component = {() => <h1>Hello / Route</h1>} />
         <Route exact path = "/cricket/bats/mrf-bat" component = {() => <h1>MRF</h1>} />
         <Route exact path = "/cricket/bats/ss-bat" component = {() => <h1>Hello SS</h1>} />
         <Route exact path = "/cricket/bats/gm-bat" component = {() => <h1>Hello GM</h1>} />
         <Route exact path = "/cricket/bats/sg-bat" component = {() => <h1>Hello SG</h1>} />
         </Switch>
    </div>
  );
}

export default App;
