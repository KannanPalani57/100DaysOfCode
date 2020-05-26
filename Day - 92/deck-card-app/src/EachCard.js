import React, { Component } from 'react'
import "./EachCards.css"

class EachCard extends Component{
   constructor(props){
       super(props);
       this.state = {
           
           image: [],
       }
      this.swapCards = this.swapCards.bind(this);   
   }

   swapCards = () => {
    var arr = [this.props.image[1],this.props.image[0]];
    console.log(arr)
     this.setState({
          image: arr,
       })
   }
   
    imageGetters = () => {
       if(this.props.image !== null){
            return this.props.image.map((item,index) => {
                return <img src = {item} key = {index} alt = {index}/>
            })
       }
   }
   
   
    render() { 
       return (
           <div>
                <section>
                    {this.imageGetters()}      
                    <br></br> 
                     <button onClick = {this.swapCards}>Swap the Cards!</button>
                   <br>
                   </br>
                </section>
           </div>
       )
}
}

export default EachCard;