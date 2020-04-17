import React, { Component } from 'react';
import ReactDOM from "react-dom";

import MainCoin from "./MainCoin"

class App extends Component{
//
    render(){
        return(
            <div>
               
             <MainCoin />

            </div>
        )
    }
}


ReactDOM.render(<App />,document.getElementById("root"));