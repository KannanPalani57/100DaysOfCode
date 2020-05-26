import React, { Component } from 'react'
import axios from "axios";
import "./Cards.css";
import EachCard from "./EachCard";

class Cards extends Component{

  constructor(props){
      super(props);
      this.state = {
          cards: []
      }
      this.getCard = this.getCard.bind(this);
      this.removeCard = this.removeCard.bind(this);
  }
//   async componentDidMount(){
//       const deck = axios.get("https://deckofcardsapi.com/api/deck/new/draw/")
//       this.setState({cards: deck.data})
//   }
  getCard = () =>{
    axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=2")
    .then(res => {
        const data = res.data       
        const arr = data.cards;
        const imgArr = arr.map(item => item.image);
        console.log(imgArr)
        this.setState({
            cards: imgArr,
        })
        
        console.log(imgArr);
    })
  }


  removeCard = () => {
      this.setState({
          cards: []
      })
  }
    render(){
        return (
            <div>
                <section>
                    <h2>Cards</h2>
                    <button onClick= {this.getCard}>Get a Card</button>
                    <button onClick= {this.removeCard}>Remove a Card</button>
                </section>
               <EachCard image = {this.state.cards} />
            </div>
        )
    }
}

export default Cards;
















//componentDidMount(){
    //      axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=2")
    //      .then(res => {
    //          const data = res.data
    //         console.log(data);
    //         })