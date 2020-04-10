import React, { Component } from 'react'
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component{

    static defaultProps = {
        die:  ['one','two','three','four','five','six']
        
    }

    constructor(props){
        super(props);
        this.state = {die1: "one",die2: "one",
    rolling: false }
        this.roll = this.roll.bind(this);
    }
    roll(){
        const newDie1 = this.props.die[Math.floor(Math.random() * this.props.die.length)]
        const newDie2 = this.props.die[Math.floor(Math.random() * this.props.die.length)]
       this.setState({die1: newDie1, die2: newDie2 ,rolling: true})
    

       setTimeout(()=>{
           this.setState({ rolling: false})
       },1000)
    }
    render(){
        return(
            <div>
            <h2>Dice Rotator</h2>
            <div className = "die">
            <Die className = "die2" number ={this.state.die1}/>
            <Die className = "die2" number ={this.state.die2} /> </div>
            <button onClick = {this.roll} disabled = {this.props.rolling}>
                {this.state.rolling?"Rolling..!":"Roll the Dice!"}
            </button>
            </div>
        )
    }
}


export default RollDice;