import React, { Component } from 'react'
import {Route, NavLink, Switch} from "react-router-dom";
import "./FoodsApp.css";


class FoodsApp extends Component{
    render(){
        return(
            <div>
                <nav className = "nav-bar">

                    <NavLink activeClassName = " "className = "nav" to = "/">Home</NavLink>
                    <NavLink className = "nav" to = "/pongal">Pongal</NavLink>
                    <NavLink className = "nav" to = "/poori">Poori</NavLink>
                    <NavLink className = "nav" to = "/sappaththi">Sappaththi</NavLink>

                </nav>
                <Switch>
                <Route exact  path = "/" component ={() => <div className = "main-foods"><h1>Hotel Of Krish</h1></div>} />
                <Route  exact path = "/pongal" component ={Pongal} />
                <Route exact path = "/poori" component = {Poori} />
                <Sappaththi exact path = "/sappaththi" component = {Sappaththi} />  

                </Switch>
                          
            </div>
        )
    }
}

export default FoodsApp;



class Pongal extends Component{
    render(){
        return(
            <div>
                <h1> Pongal </h1>
            </div>
        )
    }
}

class Poori extends Component{
    render(){
        return(
            <div>
                <h1> Poori </h1>
                <NavLink to = "/">Back</NavLink>

    </div>
        )
    }
}
class Sappaththi extends Component{
    render(){
        return(
            <div>
                <h1> Sappaththi </h1>
            </div>
        )
    }
}
