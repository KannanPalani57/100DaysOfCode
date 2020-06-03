import React, { Component } from 'react';
import "./ColorBox.css";
import {CopyToClipboard} from "react-copy-to-clipboard";

class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            copied: false
        }
        this.handleChangeColor = this.handleChangeColor.bind(this);
    }
    handleChangeColor(){
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1500)
        })
    }

    render() {
        const {copied}  = this.state;
        return (
            <CopyToClipboard text = {this.props.color} onCopy = {this.handleChangeColor} >  
             <div style = {{background: this.props.color}} className = "ColorBox">
             <div style = {{background: this.props.color}} 
                     className = {`copy-overlay ${copied && "show"} `}></div>
                <div className = {`msg-container ${copied && "show"} `}>
                    <h1>Copied!</h1>
                    <p>{this.props.color}</p>
                </div>
                 <div className = "copy-container">

                <div className = "box-content">
                    <br></br>
                <span>{this.props.name}</span>
                </div>
                 <button className = "copy-button">Copy</button>
                 </div>
              <div className = "see-more">
              <span>More</span>
              </div>

    </div>
               
    </CopyToClipboard>
        )
    }
}

export default ColorBox;