import React, { Component } from 'react';
import "./Coin.css"

class Coin extends Component{
    render(){
        return(
            <div>
             <img src={this.props.info.imgSrc} alt="coin-face"/>
           
            </div>
        )
    }
}

export {Coin};
