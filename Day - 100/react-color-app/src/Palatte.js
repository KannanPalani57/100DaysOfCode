import React, { Component } from 'react';
import "./Palatte.css";
import ColorBox from "./ColorBox";

 class Palatte extends Component {
    render() {
        const colorBoxes = this.props.colors.map((colors,index) => {
            
           return  <ColorBox color = {colors.color} key = {index} name = {colors.name} />
        })    
        return (
                <div className = "Palatte">
        <div className = "Palatte-colors"> 
            {colorBoxes}
            </div></div>
        )
    }
}


export default Palatte; 