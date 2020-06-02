import React, { Component } from 'react';
import "./ColorBox.css";

class ColorBox extends Component {
    render() {
        return (
             <div style = {{background: this.props.color}} className = "ColorBox">
                 <div className = "copy-container">
                <div className = "box-content">
                <span>{this.props.name}</span>
                </div>
                 <button className = "copy-button">Copy</button>
                 </div>
              <div className = "see-more">
              <span>More</span>
              </div>

    </div>
               
       
        )
    }
}

export default ColorBox;