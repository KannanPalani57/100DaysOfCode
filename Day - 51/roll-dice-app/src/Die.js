import React, { Component } from 'react'
import "./Die.css"

class Die extends Component{
    
     
    render(){
        var getIcon = "fas fa-dice-";
        return(
            <div>     
            <i  className={getIcon + this.props.number}></i>
            </div>
        )
    }
}


export default Die;