import React, { Component } from 'react'
import {Coin} from "./Coin"
import "./MainCoin.css"
import {choice} from "./helper";


class MainCoin extends Component{

    static defaultProps = {
        coins: [
          { side: "heads", imgSrc:"https://tinyurl.com/react-coin-heads-jpg" },
          { side: "tails", imgSrc:"https://tinyurl.com/react-coin-tail-jpg" }
        ]
      };

    constructor(props){
        super(props);
        this.state = {
            face: null,
            nTimes: 0,
            nHeads: 0,
            nTails: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        const newCoin = choice(this.props.coins);
        
        this.setState(st => {
          return {
            face: newCoin,
            nTimes: st.nTimes + 1,
            nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
            nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
          };
        });
    }

    
    render(){
        return(
            <div>
                <h3 className = "main">Coin Flipper</h3>
                {this.state.face && <Coin info={this.state.face} />}
     
               <button onClick = {this.handleClick} >Flip The Coin!</button>
    <h3>You Have flipped the Coin <span>{this.state.nTimes}</span> Times, The Head Count is <span>{this.state.nHeads}</span> Times,
    and the Tails Count is <span>{this.state.nTails}</span> Times
    </h3>
            </div>
        )
    }
}

export default MainCoin;