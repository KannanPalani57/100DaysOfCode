import React from 'react';
import Dog from "./Dog";
import './App.css';
import Contact from "./Contact"
import {Route, Switch, Link, NavLink} from "react-router-dom";
import Cards from "./Cards"
//<Cards />
//<ClientRoute />   
import ClientRoute from "./ClientRoute";


const Home = () => <h1>Home Route</h1>;

function App() {
  return (
    <div className="App">

          <nav>
            <NavLink exact activeClassName = "active" to = "/">About</NavLink>
            <Link to = "/contact">Contact</Link>
            <a href = "/dog">Dog</a>
          </nav>


         <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/dog" component = {Dog}/>
          <Route exact path = "/contact" component = {Contact}/>
          <Route  exact path = "/contact/home" component = {Home}/>
          </Switch>

    </div>
  )}

export default App;
